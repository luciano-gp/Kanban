import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  theme,
  useBreakpointValue,
  SimpleGrid,
  Text,
  Select,
  filter,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Plus, FilePdf } from "phosphor-react";
import useTaskEditModal from "../components/Modal/TaskEditModal";
import Task from "../components/Card";
import axios from "axios";

const data = await axios.get("http://localhost:3001/tasks");
const tasks = data.data;

const dataTypes = await axios.get("http://localhost:3001/types");
const types = dataTypes.data;

const cardColor = (task: string) => {
  if (task == "done") {
    return "green.700";
  }
  if (task == "doing") {
    return "yellow.700";
  }
  if (task == "pending") {
    return "blue.700";
  }
  if (task == "canceled") {
    return "red.700";
  }
};

export function TaskList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { onClose, onOpen, TaskEditModal } = useTaskEditModal();
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "2px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: theme.colors.blue[100],
              borderRadius: "12px",
            },
          }}
        >
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Tarefas
            </Heading>
            <Flex justify="flex-end" gap={8}>
              <Select
                name="typeFilter"
                id="typeFilter"
                bg="gray.800"
                color="gray.600"
                w={200}
                onChange={() => typeFilter()}
              >
                <option>Todos</option>
                {types.map((type: any) => {
                  return (
                    <option value={type.description}>{type.description}</option>
                  );
                })}
              </Select>
              <Button
                as="a"
                size="md"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={Plus} fontSize={16} />}
                onClick={onOpen}
              >
                Nova tarefa
              </Button>
              <Button
                as="a"
                size="md"
                fontSize="sm"
                colorScheme="green"
                leftIcon={<Icon as={FilePdf} fontSize={16} />}
              >
                Gerar PDF
              </Button>
            </Flex>
          </Flex>
          <Flex>
            <SimpleGrid columns={4} spacing={100}>
              <Flex direction="column" h="700">
                <Text
                  bgColor="blue.700"
                  p="2"
                  borderRadius="5"
                  textAlign="center"
                  fontWeight="bold"
                  mb="2"
                >
                  Pendente
                </Text>
                <Flex
                  direction="column"
                  h="700"
                  overflowY="scroll"
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      width: "6px",
                    },
                  }}
                >
                  {tasks.map((task: any) => {
                    const color = cardColor(task.situation) || "";
                    const status = "pending";
                    let typeName = "";
                    types.map((type: any) => {
                      if (type.id == task.TypeId) {
                        typeName = type.description;
                      }
                    });
                    const createDate = formatDate(task.create.split("T"));
                    const expireDate = formatDate(task.expire.split("T"));
                    if (status == task.situation) {
                      return (
                        <Task
                          color={color}
                          description={task.description}
                          type={typeName}
                          priority={task.priority}
                          create={createDate}
                          expire={expireDate}
                          id={task.id}
                        />
                      );
                    }
                  })}
                </Flex>
              </Flex>
              <Flex direction="column" h="700">
                <Text
                  bgColor="yellow.700"
                  p="2"
                  borderRadius="5"
                  textAlign="center"
                  fontWeight="bold"
                  mb="2"
                >
                  Pendente
                </Text>
                <Flex
                  direction="column"
                  h="700"
                  overflowY="scroll"
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      width: "6px",
                    },
                  }}
                >
                  {tasks.map((task: any) => {
                    const color = cardColor(task.situation) || "";
                    const status = "doing";
                    let typeName = "";
                    types.map((type: any) => {
                      if (type.id == task.TypeId) {
                        typeName = type.description;
                      }
                    });
                    const createDate = formatDate(task.create.split("T"));
                    const expireDate = formatDate(task.expire.split("T"));
                    if (status == task.situation) {
                      return (
                        <Task
                          color={color}
                          description={task.description}
                          type={typeName}
                          priority={task.priority}
                          create={createDate}
                          expire={expireDate}
                          id={task.id}
                        />
                      );
                    }
                  })}
                </Flex>
              </Flex>
              <Flex direction="column" h="700">
                <Text
                  bgColor="green.700"
                  p="2"
                  borderRadius="5"
                  textAlign="center"
                  fontWeight="bold"
                  mb="2"
                >
                  Finalizado
                </Text>
                <Flex
                  direction="column"
                  h="700"
                  overflowY="scroll"
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      width: "6px",
                    },
                  }}
                >
                  {tasks.map((task: any) => {
                    const color = cardColor(task.situation) || "";
                    const status = "done";
                    let typeName = "";
                    types.map((type: any) => {
                      if (type.id == task.TypeId) {
                        typeName = type.description;
                      }
                    });
                    const createDate = formatDate(task.create.split("T"));
                    const expireDate = formatDate(task.expire.split("T"));
                    if (status == task.situation) {
                      return (
                        <Task
                          color={color}
                          description={task.description}
                          type={typeName}
                          priority={task.priority}
                          create={createDate}
                          expire={expireDate}
                          id={task.id}
                        />
                      );
                    }
                  })}
                </Flex>
              </Flex>
              <Flex direction="column" h="700">
                <Text
                  bgColor="red.700"
                  p="2"
                  borderRadius="5"
                  textAlign="center"
                  fontWeight="bold"
                  mb="2"
                >
                  Cancelado
                </Text>
                <Flex
                  direction="column"
                  h="700"
                  overflowY="scroll"
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      width: "6px",
                    },
                  }}
                >
                  {tasks.map((task: any) => {
                    const color = cardColor(task.situation) || "";
                    const status = "canceled";
                    let typeName = "";
                    types.map((type: any) => {
                      if (type.id == task.TypeId) {
                        typeName = type.description;
                      }
                    });
                    const createDate = formatDate(task.create.split("T"));
                    const expireDate = formatDate(task.expire.split("T"));
                    if (status == task.situation) {
                      return (
                        <Task
                          color={color}
                          description={task.description}
                          type={typeName}
                          priority={task.priority}
                          create={createDate}
                          expire={expireDate}
                          id={task.id}
                        />
                      );
                    }
                  })}
                </Flex>
              </Flex>
            </SimpleGrid>
          </Flex>
        </Box>
      </Flex>
      {TaskEditModal}
    </Flex>
  );
}

const formatDate = (date: string[]) => {
  date = date[0].split("-");
  return `${date[2]}/${date[1]}/${date[0]}`;
};

const typeFilter = () => {
  const id = (document.getElementById("typeFilter") as HTMLInputElement).value;
  const arrayCards = document.querySelectorAll(".cardTask");
  arrayCards.forEach((card: any) => {
    let type = card.querySelector(" .cardTypes");
    type = type.textContent.split(" ");
    type = type[1];
    if (type != id) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
    if (id === "Todos") {
      card.style.display = "block";
    }
  });
};
