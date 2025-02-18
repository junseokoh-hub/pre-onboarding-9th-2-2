import React from "react";
import Image from "next/image";
import {
  Flex,
  ButtonGroup,
  Button,
  Stack,
  Text,
  Badge,
  Box,
} from "@chakra-ui/react";
import { ProductType } from "@/types/product-type";

interface ProductItemProps {
  product: ProductType;
  showModal: (product: ProductType) => void;
}

const ProductItem = ({ product, showModal }: ProductItemProps) => {
  const addToCart = async () => {
    await fetch(`/api/reservations`, {
      method: "POST",
      body: JSON.stringify(product),
    });
  };

  return (
    <Flex
      boxShadow="dark-lg"
      direction="column"
      align="center"
      borderRadius={"10px"}
    >
      <Stack pos={"relative"} w="full" h="250px">
        <Image
          style={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
          fill
          src={product.mainImage}
          alt={product.description as string}
        />
      </Stack>
      <Stack>
        <Badge color="white" maxW={"max-content"} bg="blue">
          {product.spaceCategory}
        </Badge>
        <Box>
          <Text align="center">{product.name}</Text>
          <Text align="center">{product.idx}</Text>
          <Text align="center">{product.price}</Text>
        </Box>
      </Stack>
      <ButtonGroup>
        <Button
          type="button"
          id={String(product.idx)}
          onClick={() => showModal(product)}
        >
          더보기
        </Button>
        <Button type="button" onClick={addToCart}>
          예약
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default React.memo(ProductItem);
