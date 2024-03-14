import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  IconButton,
  HStack,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Links } from "../utils/Links";

const NavLink = ({ link, title }) => {
  return (
    <ChakraLink as={Link} href={link} color={"whiteAlpha.900"} w={"100%"}>
      {title}
    </ChakraLink>
  );
};
const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton
        size={"md"}
        icon={
          isOpen ? (
            <CloseIcon fontSize={"12px"} />
          ) : (
            <HamburgerIcon fontSize={"20px"} />
          )
        }
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={onOpen}
        ref={btnRef}
        colorScheme="transparent"
        minW={"auto"}
        h={"auto"}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={"gray.900"} display={{ base: "block", md: "none" }}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "flex", md: "none" }}
              flexDirection="column"
              alignItems="center"
            >
              {Links.map((item, index) => (
                <NavLink key={index} link={item?.link} title={item?.title} />
              ))}
            </HStack>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="linkedin">Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Sidebar;
