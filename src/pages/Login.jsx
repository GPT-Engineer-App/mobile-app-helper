import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <Container maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center">
      <Box bg="blue.500" color="white" p={4} textAlign="center">
        <Text fontSize="xl" fontWeight="bold">
          Login
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
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
