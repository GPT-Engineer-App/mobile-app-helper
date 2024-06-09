import { Box, Button, Input, VStack } from "@chakra-ui/react";

function DriverLogin() {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="teal">Login as Driver</Button>
      </VStack>
    </Box>
  );
}

export default DriverLogin;
