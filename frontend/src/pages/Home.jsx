import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { VStack, Heading, Text, Button, Image, Box, SimpleGrid, HStack, Badge } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Box textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Selamat Datang di Toko Online Alia</Heading>
        <Text fontSize="xl" mb={6}>Temukan produk berkualitas dengan harga terbaik!</Text>
        <Button as={RouterLink} to="/products" colorScheme="blue" size="lg">
          Lihat Produk Kami
        </Button>
      </Box>

      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        <Feature
          icon="🛒"
          title="Belanja Mudah"
          text="Nikmati pengalaman berbelanja yang mudah dan nyaman dari rumah Anda."
        />
        <Feature
          icon="🚚"
          title="Pengiriman Cepat"
          text="Kami menjamin pengiriman cepat ke seluruh wilayah Indonesia."
        />
        <Feature
          icon="💯"
          title="Kualitas Terjamin"
          text="Semua produk kami dijamin kualitasnya dan asli 100%."
        />
      </SimpleGrid>

      <Box>
        <Heading as="h3" size="lg" mb={4}>Produk Unggulan</Heading>
        <SimpleGrid columns={[1, null, 4]} spacing={6}>
          {featuredProducts.map((product) => (
            <FeaturedProduct key={product.id} {...product} />
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="lg" mb={4}>Testimoni Pelanggan</Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={6}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </SimpleGrid>
      </Box>

      <Box textAlign="center">
        <Heading as="h3" size="lg" mb={4}>Berlangganan Newsletter</Heading>
        <Text mb={4}>Dapatkan info terbaru dan penawaran eksklusif!</Text>
        <HStack>
          <input type="email" placeholder="Alamat email Anda" style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '250px' }} />
          <Button colorScheme="green">Langganan</Button>
        </HStack>
      </Box>
    </VStack>
  );
};

const Feature = ({ icon, title, text }) => {
  return (
    <VStack>
      <Box fontSize="5xl" mb={4}>{icon}</Box>
      <Text fontWeight="bold" fontSize="xl" mb={2}>{title}</Text>
      <Text textAlign="center">{text}</Text>
    </VStack>
  );
};

const FeaturedProduct = ({ name, image, price, discount }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={name} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {discount && (
            <Badge borderRadius="full" px="2" colorScheme="red">
              Diskon {discount}%
            </Badge>
          )}
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {name}
        </Box>
        <Box>
          Rp {price.toLocaleString()}
          {discount && (
            <Box as="span" color="gray.600" fontSize="sm" ml={2}>
              <s>Rp {(price / (1 - discount / 100)).toLocaleString()}</s>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const Testimonial = ({ name, text }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4">
      <Text fontSize="md" fontStyle="italic" mb="2">"{text}"</Text>
      <Text fontWeight="bold">- {name}</Text>
    </Box>
  );
};

// Updated with online image links
const featuredProducts = [
  { id: 1, name: "Smartphone X", image: "https://via.placeholder.com/300?text=Smartphone+X", price: 2500000, discount: 10 },
  { id: 2, name: "Laptop Y", image: "https://via.placeholder.com/300?text=Laptop+Y", price: 8000000 }, // Placeholder image
  { id: 3, name: "Headphone Z", image: "https://via.placeholder.com/300?text=Headphone+Z", price: 500000, discount: 15 },
  { id: 4, name: "Smartwatch A", image: "https://via.placeholder.com/300?text=Smartwatch+A", price: 1500000 }, // Placeholder image
];

const testimonials = [
  { name: "Budi", text: "Produk berkualitas tinggi dan pengiriman cepat. Sangat puas!" },
  { name: "Siti", text: "Pelayanan pelanggan yang luar biasa. Selalu membantu dengan ramah." },
  { name: "Andi", text: "Harga terbaik yang pernah saya temukan. Pasti akan belanja lagi!" },
];

export default Home;
