import { Box, Container, VStack, HStack, IconButton, Text, Spacer } from "@chakra-ui/react";
import { FaHome, FaSearch, FaPlusSquare, FaBell, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.sm" height="100vh" display="flex" flexDirection="column" p={0}>
      <Box bg="blue.500" color="white" p={4} textAlign="center">
        <Text fontSize="xl" fontWeight="bold">
          Logistics App
        </Text>
      </Box>

      <VStack flex={1} p={4} spacing={4} overflowY="auto">
        <Text fontSize="lg">Welcome to the logistics app interface!</Text>
        <Text>This app helps you manage and track your logistics operations efficiently.</Text>
        <Spacer />
        <Text>Feel free to customize this layout to fit your needs.</Text>
      </VStack>

      <HStack bg="gray.100" p={2} justifyContent="space-around">
        <Box textAlign="center">
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" />
          <Text fontSize="sm">Home</Text>
        </Box>
        <Box textAlign="center">
          <IconButton aria-label="Search" icon={<FaSearch />} size="lg" variant="ghost" />
          <Text fontSize="sm">Search</Text>
        </Box>
        <Box textAlign="center">
          <IconButton aria-label="Add" icon={<FaPlusSquare />} size="lg" variant="ghost" />
          <Text fontSize="sm">Add</Text>
        </Box>
        <Box textAlign="center">
          <IconButton aria-label="Notifications" icon={<FaBell />} size="lg" variant="ghost" />
          <Text fontSize="sm">Notifications</Text>
        </Box>
        <Box textAlign="center">
          <Link to="/login">
            <IconButton aria-label="Profile" icon={<FaUser />} size="lg" variant="ghost" />
            <Text fontSize="sm">Login</Text>
          </Link>
        </Box>
        <Box textAlign="center">
          <Link to="/register">
            <IconButton aria-label="Profile" icon={<FaUser />} size="lg" variant="ghost" />
            <Text fontSize="sm">Register</Text>
          </Link>
        </Box>
      </HStack>
    </Container>
  );
};

export default Index;
