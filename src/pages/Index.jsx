import { Box, Container, VStack, HStack, IconButton, Text, Spacer } from "@chakra-ui/react";
import { FaHome, FaSearch, FaPlusSquare, FaBell, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.sm" height="100vh" display="flex" flexDirection="column" p={0}>
      {/* Header */}
      <Box bg="blue.500" color="white" p={4} textAlign="center">
        <Text fontSize="xl" fontWeight="bold">
          Logistics App
        </Text>
      </Box>

      {}
      <VStack flex={1} p={4} spacing={4} overflowY="auto">
        <Text fontSize="lg">Welcome to the logistics app interface!</Text>
        <Text>This app helps you manage and track your logistics operations efficiently.</Text>
        <Spacer />
        <Text>Feel free to customize this layout to fit your needs.</Text>
      </VStack>

      {/* Bottom Navigation */}
      <HStack bg="gray.100" p={2} justifyContent="space-around">
        <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" />
        <IconButton aria-label="Search" icon={<FaSearch />} size="lg" variant="ghost" />
        <IconButton aria-label="Add" icon={<FaPlusSquare />} size="lg" variant="ghost" />
        <IconButton aria-label="Notifications" icon={<FaBell />} size="lg" variant="ghost" />
        <IconButton aria-label="Profile" icon={<FaUser />} size="lg" variant="ghost" />
      </HStack>
    </Container>
  );
};

export default Index;
