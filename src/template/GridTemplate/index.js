import React from "react";
import { Grid, GridItem } from '@chakra-ui/react'

export default function GridTemplate({ children }) {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={50}>
        {children}
    </Grid>
  );
}