import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text, Checkbox, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOneClickLogin = () => {
    onClose();
  };

  return (
    <>
      <Container maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center">
        <Box bg="blue.500" color="white" p={4} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            Register
          </Text>
        </Box>
        <VStack spacing={4} p={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="privacy">
            <Checkbox>Agree to Privacy Policy</Checkbox>
          </FormControl>
          <Button colorScheme="blue" onClick={handleRegister} mt={4}>
            Register
          </Button>
        </VStack>
      </Container>

      <Button colorScheme="teal" onClick={onOpen} mt={4}>
        One-Click Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>One-Click Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="phone">
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" />
            </FormControl>
            <FormControl id="verificationCode" mt={4}>
              <FormLabel>Verification Code</FormLabel>
              <Input type="text" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleOneClickLogin}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
