import React from "react"
import { Image, Center, useColorModeValue } from "@chakra-ui/react"

import { Container } from "./Container"

export const Footer = () => {
  const colorValue = useColorModeValue("light", "dark")

  return (
    <Container position="relative" bottom="0" width="100%" py={6}>
      <Center>
        <Image
          width="100px"
          src={`/logo-vertical-${colorValue}.png`}
          objectFit="cover"
          alt="Content Fly logo"
          ignoreFallback={true}
        />
      </Center>
    </Container>
  )
}
