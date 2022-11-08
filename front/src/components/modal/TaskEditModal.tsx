import {
  Flex,
  Box,
  Heading,
  Divider,
  VStack,
  Grid,
  GridItem,
  Button,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Input } from "../Input";
import axios from "axios";

const dataTypes = await axios.get("http://localhost:3000/types");
const types = dataTypes.data;

export default function TaskEdit() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const TaskEditModal = useMemo(() => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody bg="gray.800">
            <Flex direction="column">
              <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                  <Heading size="lg" fontWeight="normal">
                    Tarefa
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
                        <GridItem colSpan={7}>
                          <Input name="description" label="Descrição" />
                        </GridItem>
                        <GridItem colSpan={1}>
                          <label htmlFor="">Prioridade</label>
                          <Select
                            name="priority"
                            bg="gray.800"
                            color="gray.600"
                            mt="3"
                          >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5" selected>
                              5
                            </option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </Select>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <label htmlFor="">Situação</label>
                          <Select
                            name="priority"
                            bg="gray.800"
                            color="gray.600"
                            mt="3"
                          >
                            <option value="#">Pendente</option>
                            <option value="#">Fazendo</option>
                          </Select>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <label htmlFor="">Tipo</label>
                          <Select
                            name="priority"
                            bg="gray.800"
                            color="gray.600"
                            mt="3"
                          >
                            {types.map((type: any) => {
                              return (
                                <option value={type.id}>
                                  {type.description}
                                </option>
                              );
                            })}
                          </Select>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <Input
                            name="create"
                            type="datetime-local"
                            label="Data de Criação"
                          />
                        </GridItem>
                        <GridItem colSpan={2}>
                          <Input
                            name="expire"
                            type="datetime-local"
                            label="Data de Vencimento"
                          />
                        </GridItem>
                      </Grid>
                    </form>
                  </VStack>
                  <Flex mt="8" justify="flex-end" gap="4">
                    <Link to="#">
                      <Button colorScheme="whiteAlpha" onClick={onClose}>
                        Cancelar
                      </Button>
                    </Link>
                    <Button
                      colorScheme="blue"
                      // onClick={handleSubmit(handleCrateNewTask)}
                    >
                      Salvar
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }, [isOpen, onClose]);

  return {
    onOpen,
    onClose,
    TaskEditModal,
  };
}
