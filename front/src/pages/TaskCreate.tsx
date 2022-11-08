import {
  Flex,
  Box,
  Heading,
  Divider,
  VStack,
  Grid,
  GridItem,
  SimpleGrid,
  Button,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Sidebar } from "../components/Sidebar";
import axios from "axios";
import { toast } from "react-toastify";
import { FormEvent, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export function TaskCreate() {
  const methods = useForm;
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar Tarefa
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <form action="">
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
                  <Input name="title" label="Título" />
                </GridItem>
                <GridItem colSpan={2}>
                  <label htmlFor="">Situação</label>
                  <Select name="priority" bg="gray.800" color="gray.600" mt="3">
                    <option value="#">Pendente</option>
                    <option value="#">Fazendo</option>
                  </Select>
                </GridItem>
                <GridItem colSpan={1}>
                  <label htmlFor="">Prioridade</label>
                  <Select
                    name="priority"
                    bg="gray.800"
                    color="gray.600"
                    placeholder="Escolha"
                    mt="3"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </Select>
                </GridItem>
                <GridItem colSpan={2}>
                  <label htmlFor="">Tipo</label>
                  <Select
                    name="priority"
                    bg="gray.800"
                    color="gray.600"
                    placeholder="Escolha"
                    mt="3"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </Select>
                </GridItem>
                <GridItem colSpan={3}>
                  <Input
                    name="create"
                    type="datetime-local"
                    label="Data de Criação"
                  />
                </GridItem>
                <GridItem colSpan={3}>
                  <Input
                    name="expire"
                    type="datetime-local"
                    label="Data de Vencimento"
                  />
                </GridItem>
              </Grid>
            </form>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Textarea resize="none" h="40" placeholder="Descrição" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" gap="4">
            <Link to="/users">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
            </Link>
            <Button
              colorScheme="blue"
              // onClick={handleSubmit(handleCrateNewUser)}
            >
              Salvar
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
