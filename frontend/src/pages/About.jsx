import React from 'react';
import { VStack, Heading, Text, Box, SimpleGrid, Image } from '@chakra-ui/react';

const About = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Box textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Tentang Kami</Heading>
        <Text fontSize="xl">Kami adalah toko online terpercaya yang menyediakan berbagai produk berkualitas.</Text>
      </Box>

      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        <Box>
          <Heading as="h3" size="lg" mb={4}>Visi Kami</Heading>
          <Text>Menjadi toko online terdepan yang menyediakan produk berkualitas tinggi dengan harga terjangkau, serta memberikan pengalaman berbelanja yang luar biasa bagi pelanggan kami.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={4}>Misi Kami</Heading>
          <Text>
            1. Menyediakan produk berkualitas tinggi<br />
            2. Memberikan layanan pelanggan yang unggul<br />
            3. Terus berinovasi dalam pengalaman berbelanja online<br />
            4. Mendukung produsen lokal dan praktik bisnis yang berkelanjutan
          </Text>
        </Box>
      </SimpleGrid>

      <Box>
        <Heading as="h3" size="lg" mb={4}>Tim Kami</Heading>
        <SimpleGrid columns={[2, null, 4]} spacing={6}>
          <TeamMember name="John Doe" position="CEO" />
          <TeamMember name="Jane Smith" position="CTO" />
          <TeamMember name="Mike Johnson" position="Marketing Manager" />
          <TeamMember name="Sarah Lee" position="Customer Service Lead" />
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

const TeamMember = ({ name, position }) => {
  return (
    <VStack>
      <Image
        borderRadius="full"
        boxSize="150px"
        src={`https://via.placeholder.com/150?text=${name.charAt(0)}`}
        alt={name}
        mb={2}
      />
      <Text fontWeight="bold">{name}</Text>
      <Text>{position}</Text>
    </VStack>
  );
};

export default About;