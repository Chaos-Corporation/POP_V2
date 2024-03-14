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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { Links } from "../utils/Links";

const NavLink = ({ link, title }) => {
  return (
    <ChakraLink
      as={Link}
      href={link}
      color={"whiteAlpha"}
      fontSize={"14px"}
      fontWeight={"600"}
    >
      {title}
    </ChakraLink>
  );
};

const Header = () => {
  return (
    <>
      <Box
        as="header"
        bg={"transparent"}
        py={4}
        px={{ base: 3, sm: 8 }}
        w={"100%"}
        zIndex={5}
        position={"absolute"}
        top={0}
        left={0}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box w={"100%"} display={{ base: "block", md: "none" }}>
            <Sidebar />
          </Box>
          <HStack spacing={8} w={"100%"}>
            <Box w={"100%"}>
              <Image
                src="/POPLogo.png"
                boxSize={30}
                alt="Payout Pursuit Logo"
                margin={{ base: "auto", md: "initial" }}
              />
            </Box>
          </HStack>
          <Box w={"100%"}>
            <HStack
              as={"nav"}
              spacing={6}
              display={{ base: "none", md: "flex" }}
              justifyContent={"flex-end"}
            >
              {Links.map((item, index) => (
                <NavLink key={index} link={item?.link} title={item?.title} />
              ))}
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
