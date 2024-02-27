import React, { useState } from "react";
import { Box, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomAvatar from "./CustomAvatar";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="blue.500"
      color="white"
    >
      {/* Logo */}
      <Box>
        <Image src="/logo.png" alt="Logo" boxSize="40px" />
      </Box>

      {/* Navigation Links */}
      <Flex align="center" gap={"10px"}>
        <Link to="#" mr={4}>
          Home
        </Link>
        <Link to="#" mr={4}>
          About
        </Link>
        <Link to="#" mr={4}>
          Services
        </Link>
        <Link to="#" mr={4}>
          Contact
        </Link>
      </Flex>

      {/* Sign Up or Avatar based on login status */}
      <Flex align="center">
        {user ? (
          <CustomAvatar user={user}/>
        ) : (
          <Link to="/signup">
            <Button colorScheme="teal">Sign Up</Button>
          </Link>
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;
