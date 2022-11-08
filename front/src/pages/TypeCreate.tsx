import {
  Flex,
  Box,
  Heading,
  Divider,
  VStack,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function TypeCreate() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar Tipo
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <Grid
              w="100%"
              templateColumns={[
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(8, 1fr)",
              ]}
              gap="8"
            >
              <GridItem colSpan={3}>
                <Input name="description" label="Nome" />
              </GridItem>
            </Grid>

          </VStack>

          <Flex mt="8" justify="flex-end" gap="4">
            <Link to="/tasks">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
            </Link>
            <Button colorScheme="blue">Salvar</Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
