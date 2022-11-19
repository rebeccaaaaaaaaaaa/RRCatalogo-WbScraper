import React from 'react'
import { Container } from '@chakra-ui/react'

export function ContainerBox({ children }) {
  return (
    <Container maxW='1800px'>
        {children}
    </Container>
  )
}