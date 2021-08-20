/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
// Next, React
import Head from "next/head"
import React, { useRef, useEffect } from "react"

import { Image, VStack, useColorModeValue, Center, Link, Text, Box } from "@chakra-ui/react"
import { Container } from "../ui/components/Container"
import { Main } from "../ui/components/Main"
import { DarkModeSwitch } from "../ui/components/DarkModeSwitch"
import { Footer } from "../ui/components/Footer"
import { GradientText } from "../ui/components/GradientText"

function LandingPage() {
  const ref = useRef(null)
  const colorValue = useColorModeValue("light", "dark")

  useEffect(() => {
    import("@lottiefiles/lottie-player")
  })

  return (
    <Container height="100vh">
      <Main>
        <Head>
          <title>ContentFly.app</title>
        </Head>

        <VStack spacing={10} pb={10}>
          <Center>
            <Image
              width="300px"
              src={`/logo-horizontal-${colorValue}.png`}
              objectFit="cover"
              alt="Content Fly logo"
              ignoreFallback={true}
            />
          </Center>

          <GradientText>
            Connecting high quality content creators to brands, running on Dfinity Internet Computer
          </GradientText>

          <Box pb={0}>
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://assets4.lottiefiles.com/packages/lf20_anre6w2q.json"
              style={{ width: "300px", height: "300px" }}
            />
          </Box>
          <Text fontSize="4xl" fontWeight="medium">Acquire Content that Makes You Fly</Text>
        </VStack>
      </Main>
      <DarkModeSwitch />
      <Footer />
    </Container>
  )
}

export default LandingPage
