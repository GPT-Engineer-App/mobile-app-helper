import { Box, Button, Container, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleOwnerLogin = () => {
    navigate("/login/owner");
  };

  const handleDriverLogin = () => {
    navigate("/login/driver");
  };

  const handleCompanyLogin = () => {
    navigate("/login/company");
  };

  return (
    <Container maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center">
      <Box bg="blue.500" color="white" p={4} textAlign="center">
        <Text fontSize="xl" fontWeight="bold">
          Login
        </Text>
      </Box>
      <VStack spacing={4} p={4} align="stretch">
        <Button colorScheme="blue" onClick={handleOwnerLogin}>
          货主登录
        </Button>
        <Button colorScheme="green" onClick={handleDriverLogin}>
          司机登录
        </Button>
        <Button colorScheme="teal" onClick={handleCompanyLogin}>
          运输公司登录
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
