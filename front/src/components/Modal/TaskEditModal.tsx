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

const dataTypes = await axios.get("http://localhost:3001/types");
const types = dataTypes.data;

export default function TaskEdit(id?: number) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const optionsPriority = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const TaskEditModal = useMemo(() => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
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
                        <GridItem colSpan={8}>
                          <Input
                            name="description"
                            id="description"
                            label="Descrição"
                          />
                        </GridItem>
                        <GridItem colSpan={1}>
                          <label htmlFor="">Prioridade</label>
                          <Select
                            name="priority"
                            id="priority"
                            bg="gray.800"
                            color="gray.40"
                            mt="3"
                          >
                            {optionsPriority.map((option: any) => {
                              return (
                                <option
                                  value={option}
                                  style={{ background: "#181b23" }}
                                >
                                  {option}
                                </option>
                              );
                            })}
                          </Select>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <label htmlFor="">Situação</label>
                          <Select
                            name="situation"
                            id="situation"
                            bg="gray.800"
                            color="gray.40"
                            mt="3"
                          >
                            <option
                              value="pending"
                              style={{ background: "#181b23" }}
                            >
                              Pendente
                            </option>
                            <option
                              value="doing"
                              style={{ background: "#181b23" }}
                            >
                              Fazendo
                            </option>
                            <option
                              value="done"
                              style={{ background: "#181b23" }}
                            >
                              Concluído
                            </option>
                            <option
                              value="canceled"
                              style={{ background: "#181b23" }}
                            >
                              Cancelado
                            </option>
                          </Select>
                        </GridItem>
                        <GridItem colSpan={2}>
                          <label htmlFor="">Tipo</label>
                          <Select
                            name="type"
                            id="type"
                            bg="gray.800"
                            color="gray.40"
                            mt="3"
                          >
                            {types.map((type: any) => {
                              return (
                                <option
                                  value={type.id}
                                  style={{ background: "#181b23" }}
                                >
                                  {type.description}
                                </option>
                              );
                            })}
                          </Select>
                        </GridItem>
                        <GridItem colSpan={3}>
                          <Input
                            name="expire"
                            id="expire"
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
                    <Button colorScheme="blue" onClick={submit}>
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

const submit = async () => {
  try {
    const data = {
      description: (document.getElementById("description") as HTMLInputElement)
        .value,
      priority: (document.getElementById("priority") as HTMLInputElement).value,
      situation: (document.getElementById("situation") as HTMLInputElement)
        .value,
      TypeId: (document.getElementById("type") as HTMLInputElement).value,
      create: new Date(),
      expire: (document.getElementById("expire") as HTMLInputElement).value,
    };
    console.log(data);
    await axios.post("http://localhost:3001/tasks", data);
  } catch (err) {
    alert("Error creating");
  }
};
