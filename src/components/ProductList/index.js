import React from "react";
import { Card, CardHeader, GridItem, CardFooter, CardBody, Button, Box } from "@chakra-ui/react";
import GridTemplate from "../../template/GridTemplate";

export function ProductList({ products }) {
  console.log(products);
  return (
    <GridTemplate>
      {products?.map((product) => (
        <GridItem w="100%">
          <Card 
            key={product.id} 
            transition={"all 0.3s cubic-bezier(.08,.52,.52,1)"} 
            cursor={"pointer"}
            _hover={{
              transform: "scale(1.05)",
            }}>
            <CardBody>
              <img src={product.image} alt={product.title} />
            </CardBody>
            <CardHeader>{product.title}</CardHeader>
            <CardFooter display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
             <Box fontSize={20} fontWeight={500}> {product.price} </Box>
              <Button bgColor={'#25d366'} color={'#fff'} _hover={{
                bgColor: '#128c7e'
              }}> Pedir agora </Button>
            </CardFooter>
          </Card>
        </GridItem>
      ))}
    </GridTemplate>
  );
}
