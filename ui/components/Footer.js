import React from "react"
import { Image, Center, useColorModeValue, Link, VStack } from "@chakra-ui/react"

import { Container } from "./Container"

export const Footer = () => {
  const colorValue = useColorModeValue("light", "dark")

  return (
    <Container position="relative" bottom="0" width="100%" py={6}>
      <VStack>
      <Center>
        <Image
          width="100px"
          src={`/logo-vertical-${colorValue}.png`}
          objectFit="cover"
          alt="Content Fly logo"
          ignoreFallback={true}
        />
      </Center>
      <Link href="mailto://hello@contentfly.app">
          hello@contentfly.app
      </Link>
      <Link href="https://twitter.com/ContentFlyApp" isExternal>
          Twitter
      </Link>
      <Link href="https://medium.com/contentfly-app-blog" isExternal>
          Medium Blog
      </Link>
      </VStack>
    </Container>
  )
}
