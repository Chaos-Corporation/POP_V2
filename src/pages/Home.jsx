import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Image,
  Link as ChakraLink,
  Heading,
  Container,
  Center,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box className="Home">
      <Box
        as="section"
        position={"relative"}
        className="HeroSection"
        h={"100vh"}
      >
        <Image
          src="/SplashScreen.png"
          boxSize={"100%"}
          alt="Payout Pursuit Splash Screen"
          zIndex={-1}
          objectFit={"cover"}
          objectPosition={{ base: "-900px", md: "center" }}
        />
        <Box
          px={{ base: "10px", sm: "30px", md: "100px" }}
          pos={"absolute"}
          top={"30%"}
          left={0}
          w={"100%"}
        >
          <Image
            src="/POPV2Logo.png"
            w={["300px", "500px"]}
            alt="Payout Pursuit Logo"
            m={{ base: "auto", md: "initial" }}
            mb={10}
          />
          <Heading
            as="h1"
            fontSize={{
              base: "2xl",
              sm: "2xl",
              md: "3xl",
              lg: "4xl",
            }}
            // fontSize={"4xl"}
            textAlign={{ base: "center", md: "left" }}
          >
            Master the race, claim <br /> your rewards!
          </Heading>

          <Box textAlign={{ base: "center", md: "left" }}>
            <ChakraLink
              as={Link}
              to="https://play.payoutpursuit.com/"
              className="Btn_Gradient"
              w={"140px"}
              fontSize={"16px"}
              textDecoration={"none"}
              mt={{ base: 4, sm: 8, md: 10 }}
              display={"inline-block"}
              target="_blank"
            >
              Play Now.
            </ChakraLink>
          </Box>
        </Box>
      </Box>

      <Container as="section" className="AboutSection" maxW={"8xl"}>
        <SimpleGrid
          as={"section"}
          columns={{ base: 1, md: 2 }}
          spacing={10}
          py={{ base: "0", md: "50px" }}
          mt={{ base: 10, md: 10 }}
          mb={{ base: 0, md: 10 }}
        >
          <Box pos={"relative"} w={"100%"}>
            <Box w={"100%"} pt={5}>
              <Heading
                color={"#F7A724"}
                fontSize={{
                  base: "1xl",
                  sm: "2xl",
                  md: "3xl",
                  lg: "4xl",
                }}
              >
                What We’re About
              </Heading>
              <Text
                color="whiteAlpha.600"
                mt={6}
                fontSize={["12px", "14px", "16px"]}
                w={"85%"}
              >
                Payout Pursuit is poised to be THE multichain racing game of the
                Gamefi Universe. Gamers will have opportunities to win
                crypotocurrency prices in daily, weekly, and monthly races as
                well as in special events.
              </Text>
            </Box>
            <Image
              src="/Tag3.png"
              w={["100px", "200px", "300px"]}
              alt="Section Tag"
              pos={"absolute"}
              top={0}
              right={0}
            />
          </Box>
          <Box pos={"relative"} w={"100%"}></Box>
        </SimpleGrid>
        <SimpleGrid
          as={"section"}
          columns={{ base: 1, md: 2 }}
          spacing={10}
          py={{ base: "0", md: "50px" }}
          mt={{ base: 0, md: 10 }}
          mb={{ base: 0, md: 10 }}
        >
          <Center h={"100%"}>
            <video w="100" autoPlay loop muted>
              <source
                src="https://drifttoken.io/PayoutPersuit.mp4"
                type="video/mp4"
              />
            </video>
          </Center>

          <Box pos={"relative"} w={"100%"}>
            <Box w={"100%"} pt={5}>
              <Heading
                color={"#02C8C7"}
                fontSize={{
                  base: "1xl",
                  sm: "2xl",
                  md: "3xl",
                  lg: "4xl",
                }}
              >
                Where Skill Meets Reward
              </Heading>
              <Text
                color="whiteAlpha.600"
                mt={6}
                fontSize={["12px", "14px", "16px"]}
                w={"85%"}
              >
                Payout Pursuit was conceived by a true gaming enthusiast, born
                with a passion for thrilling adventures in the digital realm.
                <br />
                <br />
                At Payout Pursuit, we're committed to delivering an unparalleled
                level of competitiveness, ensuring that everyone has a fair shot
                at success. Whether you're a seasoned gamer or just getting
                started, you can develop your skills and vie for the chance to
                win instant, substantial crypto payouts. This is not just
                another game; it's a thrilling journey where skill, strategy,
                and a dash of luck can lead to massive rewards.
              </Text>
            </Box>
            <Image
              src="/Tag2.png"
              w={["100px", "200px", "300px"]}
              alt="Section Tag"
              pos={"absolute"}
              top={0}
              right={0}
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          as={"section"}
          columns={{ base: 1, md: 2 }}
          spacing={10}
          py={{ base: "0", md: "50px" }}
          my={{ base: 10 }}
        >
          <Box pos={"relative"} w={"100%"}>
            <Box w={"100%"} pt={5}>
              <Heading
                color={"#DE017B"}
                fontSize={{
                  base: "1xl",
                  sm: "2xl",
                  md: "3xl",
                  lg: "4xl",
                }}
              >
                Community Matters
              </Heading>
              <Text
                color="whiteAlpha.600"
                mt={6}
                fontSize={["12px", "14px", "16px"]}
                w={"85%"}
              >
                Stay up-to-date on racer stats with our leaderboard, and active
                Discord & Telegram chats. Race members of the Gamefi community
                or a group of personal friends. But remember, in this
                high-stakes race, only ONE can reign supreme as the undisputed
                Drift King.
              </Text>
            </Box>
            <Image
              src="/Tag1.png"
              w={["100px", "200px", "300px"]}
              alt="Section Tag"
              pos={"absolute"}
              top={0}
              right={0}
            />
          </Box>
          <Box pos={"relative"} w={"100%"}></Box>
        </SimpleGrid>
        <Box as={"section"} py={{ base: "0", md: "20px" }} my={{ base: 10 }}>
          <Heading
            textAlign={"center"}
            fontSize={{
              base: "2xl",
              lg: "4xl",
            }}
          >
            How We’re Different
          </Heading>
          <Flex
            py={"50px"}
            gap={{ base: 10, md: 20 }}
            flexWrap={{ base: "wrap", lg: "nowrap" }}
            w={"100%"}
            justifyContent={"space-between"}
          >
            <Box
              w={{ base: "100%", md: "43%", lg: "100%" }}
              bg={"#181517"}
              borderRadius={"10px"}
              p={"40px"}
            >
              <Image src="/Icon1.png" alt="Game Icon" m="auto" mb={5} />
              <Heading
                as={"h4"}
                color={"#F7A724"}
                textAlign={"center"}
                fontSize={{
                  base: "1lg",
                  sm: "2lg",
                  md: "1xl",
                }}
              >
                ENGAGING GAMEPLAY
              </Heading>
              <Text
                color="whiteAlpha.600"
                mt={6}
                fontSize={["14px", "16px"]}
                textAlign={"center"}
              >
                Experience browser-friendly, skill-based racing that seamlessly
                integrates cryptocurrency stakes.
              </Text>
            </Box>
            <Box
              w={{ base: "100%", md: "43%", lg: "100%" }}
              bg={"#181517"}
              borderRadius={"10px"}
              p={"40px"}
            >
              <Image src="/Icon2.png" alt="Game Icon" m="auto" mb={5} />
              <Heading
                as={"h4"}
                color={"#10FFFE"}
                textAlign={"center"}
                fontSize={{
                  base: "1lg",
                  sm: "2lg",
                  md: "1xl",
                }}
              >
                OWNABLE IN-GAME ASSETS
              </Heading>
              <Text
                color="whiteAlpha.600"
                mt={6}
                fontSize={["14px", "16px"]}
                textAlign={"center"}
              >
                Customize your vehicles with graphics, yet no NFT holders will
                have an advantage over others.
              </Text>
            </Box>
            <Box
              w={{ base: "100%", sm: "100%", lg: "100%" }}
              bg={"#181517"}
              borderRadius={"10px"}
              p={"40px"}
            >
              <Image src="/Icon3.png" alt="Game Icon" m="auto" mb={5} />
              <Heading
                color={"#FF008C"}
                as={"h4"}
                textAlign={"center"}
                fontSize={{
                  base: "1lg",
                  sm: "2lg",
                  md: "1xl",
                }}
              >
                EGALITARIAN WIN MECHANISM
              </Heading>
              <Text
                color="whiteAlpha.600"
                mt={6}
                fontSize={["14px", "16px"]}
                textAlign={"center"}
              >
                Our ethos is to give a fair chance of becoming The Drift King,
                who seizes the lion's share of the winnings.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box as={"section"} py={{ base: "0", md: "20px" }}>
          <Heading
            textAlign={"center"}
            fontSize={{
              base: "2xl",
              lg: "4xl",
            }}
          >
            Development Roadmap
          </Heading>
          <Flex
            mt={"100px"}
            py={"50px"}
            gap={{ base: 32, md: 20 }}
            flexWrap={{ base: "wrap", lg: "nowrap" }}
            w={"100%"}
            justifyContent={"space-between"}
          >
            <Box
              w={{ base: "100%", md: "43%", lg: "100%" }}
              bg={"#181517"}
              borderRadius={"10px"}
              p={"40px"}
            >
              <Image
                src="/V1.png"
                alt="Version 1"
                m="auto"
                mb={5}
                mt={"-138px"}
              />
              <Heading
                as={"h4"}
                textAlign={"center"}
                fontSize={{
                  base: "1lg",
                  sm: "2lg",
                  md: "1xl",
                }}
              >
                V1 : Global Leaderboard
              </Heading>
              <Text
                color="whiteAlpha.600"
                mt={6}
                fontSize={["14px", "16px"]}
                textAlign={"center"}
              >
                Launch Beta version of the gameplay, enabling users to get
                acquainted with in-game physics before actual competition.
              </Text>
            </Box>
            <Box
              w={{ base: "100%", md: "43%", lg: "100%" }}
              bg={"#181517"}
              borderRadius={"10px"}
              p={"40px"}
            >
              <Image
                src="/V2.png"
                alt="Version 2"
                m="auto"
                mb={5}
                mt={"-138px"}
              />
              <Heading as={"h4"} textAlign={"center"} fontSize={"1xl"}>
                V2 : Blockchain Integration
              </Heading>
              <Text
                color="whiteAlpha.600"
                mt={6}
                fontSize={["14px", "16px"]}
                textAlign={"center"}
              >
                Events will require an entry fee, that pools up as rewards for
                the winners (top 30%).
              </Text>
            </Box>
            <Box
              w={{ base: "100%", sm: "100%", lg: "100%" }}
              bg={"#181517"}
              borderRadius={"10px"}
              p={"40px"}
            >
              <Image
                src="/V3.png"
                alt="Version 3"
                m="auto"
                mb={5}
                mt={"-138px"}
              />
              <Heading
                as={"h4"}
                textAlign={"center"}
                fontSize={{
                  base: "1lg",
                  sm: "2lg",
                  md: "1xl",
                }}
              >
                V3 : Multichain madness
              </Heading>
              <Text
                color="whiteAlpha.600"
                mt={6}
                fontSize={["14px", "16px"]}
                textAlign={"center"}
              >
                Compete against players from others chains and Win a pot of
                mixed native chain tokens.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
      <Box>
        <Image src="/RoadImage.png" />
      </Box>
      <Box as="footer" py={4} px={{ base: 3, sm: 8 }}>
        <Flex
          as={"section"}
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          flexDirection={{ base: "column-reverse", md: "row" }}
          justifyContent={"space-between"}
          gap={10}
          my={10}
        >
          <Box w={{ base: "100%", md: "45%", lg: "25%", xl: "100%" }}>
            <Image
              src="/POPV2Logo.png"
              w={{ base: "200px", md: "300px" }}
              alt="Section Tag"
            />
            <Text
              color="whiteAlpha.600"
              my={5}
              fontSize={["12px", "14px", "16px"]}
              w={"85%"}
              fontWeight={300}
              lineHeight={1.2}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et consequat. Duis aute mollit
              anim id est laborum.
            </Text>
            <Flex flexWrap={"wrap"} gap={5}>
              <ChakraLink as={Link} to="/" className="jello-horizontal">
                <Image src="/Icon5.png" alt="Telegram Link" />
              </ChakraLink>
              <ChakraLink as={Link} to="/" className="jello-horizontal">
                <Image src="/Icon6.png" alt="Telegram Link" />
              </ChakraLink>
              <ChakraLink as={Link} to="/" className="jello-horizontal">
                <Image src="/Icon7.png" alt="Telegram Link" />
              </ChakraLink>
              <ChakraLink as={Link} to="/" className="jello-horizontal">
                <Image src="/Icon4.png" alt="Telegram Link" />
              </ChakraLink>
            </Flex>
          </Box>
          <Box w={{ base: "100%", md: "45%", lg: "25%", xl: "100%" }}>
            <Heading as={"h6"} fontSize={{ base: "1xl", md: "2xl" }}>
              Get Involved
            </Heading>
            <Flex flexDirection={"column"} gap={3} mt={3}>
              <Box>
                <ChakraLink
                  as={Link}
                  to="https://drifttoken.io/"
                  target="_blank"
                  fontSize={"14px"}
                  color={"whiteAlpha.800"}
                >
                  Drift Token
                </ChakraLink>
              </Box>
              <Box>
                <ChakraLink
                  as={Link}
                  to="https://influ3nce.me/ambassador/"
                  target="_blank"
                  fontSize={"14px"}
                  color={"whiteAlpha.800"}
                >
                  Ambassador Program
                </ChakraLink>
              </Box>
            </Flex>
          </Box>
          <Box w={{ base: "100%", md: "45%", lg: "25%", xl: "100%" }}>
            <Heading as={"h6"} fontSize={{ base: "1xl", md: "2xl" }}>
              Pages
            </Heading>
            <Flex flexDirection={"column"} gap={3} mt={3}>
              <Box>
                <ChakraLink
                  as={Link}
                  to="https://play.payoutpursuit.com/"
                  target="_blank"
                  fontSize={"14px"}
                  color={"whiteAlpha.800"}
                >
                  Play Now
                </ChakraLink>
              </Box>
              <Box>
                <ChakraLink
                  as={Link}
                  to="https://influ3nce.me/ambassador/"
                  target="_blank"
                  fontSize={"14px"}
                  color={"whiteAlpha.800"}
                >
                  Ambassador Program
                </ChakraLink>
              </Box>
            </Flex>
          </Box>
          <Box w={{ base: "100%", md: "45%", lg: "25%", xl: "100%" }}>
            <Heading w={"100%"} as={"h6"} fontSize={{ base: "1xl", md: "2xl" }}>
              Contact
            </Heading>
            <Flex flexDirection={"column"} gap={3} mt={3}>
              <Box>
                <ChakraLink
                  as={Link}
                  to="#"
                  target="_blank"
                  fontSize={"14px"}
                  color={"whiteAlpha.800"}
                  display={"inline-flex"}
                  gap={1}
                >
                  <Image src="/call.png" />
                  <Text fontSize={"14px"}>(205) 555-01000</Text>
                </ChakraLink>
              </Box>
              <Box>
                <ChakraLink
                  as={Link}
                  to="#"
                  target="_blank"
                  fontSize={"14px"}
                  color={"whiteAlpha.800"}
                  display={"inline-flex"}
                  gap={1}
                  alignItems={"center"}
                >
                  <Image src="/clock.png" />
                  <Text fontSize={"14px"}>Mon - Fri : 9 am- 11 pm</Text>
                </ChakraLink>
              </Box>
              <Box>
                <ChakraLink
                  as={Link}
                  to="#"
                  target="_blank"
                  fontSize={"14px"}
                  color={"whiteAlpha.800"}
                  display={"inline-flex"}
                  gap={1}
                >
                  <Image src="/sms.png" />
                  <Text fontSize={"14px"}>Email@Coinreal.com</Text>
                </ChakraLink>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
