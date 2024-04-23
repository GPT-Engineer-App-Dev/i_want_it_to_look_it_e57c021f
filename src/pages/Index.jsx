import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack, useColorModeValue, keyframes } from "@chakra-ui/react";
import { FaPlay, FaSpotify, FaApple, FaGoogle, FaInstagram, FaTiktok } from "react-icons/fa";

const Index = () => {
  const tripAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const TripHeading = ({ children }) => (
  <Heading
    as="h1"
    size="2xl"
    animation={`${tripAnimation} 3s ease-in-out infinite`}
  >
    {children}
  </Heading>
);

  return (
    <Container maxW="container.xl" p={4}>
      {}
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        my={12}
        w="100%"
        bgGradient="linear(to-r, #FF0080, #FF8C00, #40E0D0)"
      >
        <VStack align="center" w="100%" spacing={6}>
          <TripHeading>
            DESUBICADOS
          </TripHeading>
          <Text fontSize="lg" color="white">
            Tune in to our weekly podcast about web development, design, and the latest trends in technology. Listen to industry leaders share their stories and insights.
          </Text>
          <Button leftIcon={<FaPlay />} colorScheme="purple" size="lg">
            Listen Now
          </Button>
        </VStack>
        <Box w={{ base: "80%", md: "50%" }} mt={{ base: 20, md: 10 }}>
          <Image src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YW4lMjBnb2doJTIwcGFpbnRpbmd8ZW58MHx8fHwxNzA0NDIyOTI2&ixlib=rb-4.0.3&q=80&w=1080" alt="Van Gogh Painting" borderRadius="lg" />
        </Box>
      </Flex>

      {/* Recent Episodes */}
      <Box as="section" my={20}>
        <Heading as="h2" size="xl" mb={6}>
          Recent Episodes
        </Heading>
        <Stack spacing={6}>
          <Episode title="Episode 10: Understanding React Hooks" />
          <Episode title="Episode 09: Exploring the Jamstack" />
          <Episode title="Episode 08: Interview with a UX Expert" />
          {/* Add more episodes as needed */}
        </Stack>
      </Box>

      {}
      <Flex
        as="section"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        p={12}
        my={12}
        bgGradient="linear(to-r, #FF0080, #FF8C00, #40E0D0)"
        borderRadius="lg"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Heading as="h3" size="lg">
          Subscribe to our Podcast
        </Heading>
        <Stack direction="row" mt={{ base: 4, md: 0 }} spacing={4}>
          <Button aria-label="Spotify" leftIcon={<FaSpotify />} colorScheme="green" />
          <Button aria-label="Apple Podcasts" leftIcon={<FaApple />} colorScheme="gray" />
          <Button aria-label="Google Podcasts" leftIcon={<FaGoogle />} colorScheme="orange" mr={4} />
          <Button aria-label="Instagram" leftIcon={<FaInstagram />} colorScheme="pink" />
          <Button aria-label="TikTok" leftIcon={<FaTiktok />} colorScheme="blue" />
        </Stack>
      </Flex>
    </Container>
  );
};

// Episode component for the recent episodes section
const Episode = ({ title }) => (
  <Flex direction={{ base: "column", sm: "row" }} justifyContent="space-between" alignItems="center" p={4} bg={useColorModeValue("white", "gray.800")} borderRadius="lg" boxShadow="md">
    <Heading as="h4" size="md">
      {title}
    </Heading>
    <Button mt={{ base: 4, sm: 0 }} leftIcon={<FaPlay />} colorScheme="black">
      Play
    </Button>
  </Flex>
);

export default Index;
