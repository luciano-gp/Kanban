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
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={Plus} fontSize={16} />}
                onClick={onOpen}
              >
                Nova tarefa
              </Button>
              <Button
                as="a"
                size="sm"
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
              <Flex direction="column">
                <Text
                  bgColor="blue"
                  p="2"
                  borderRadius="5"
                  textAlign="center"
                  fontWeight="bold"
                >
                  Pendente
                </Text>
                {tasks.map((task: any) => {
                  let color = "";
                  const status = "pending";
                  console.log(task.situation);
                  if (task.situation == "done") {
                    color = "green";
                  }
                  if (task.situation == "doing") {
                    color = "orange";
                  }
                  if (task.situation == "pending") {
                    color = "blue";
                  }
                  if (task.situation == "canceled") {
                    color = "red";
                  }
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
              <Flex direction="column">
                <Text
                  bgColor="orange"
                  p="2"
                  borderRadius="5"
                  textAlign="center"
                  fontWeight="bold"
                >
                  Fazendo
                </Text>
                {tasks.map((task: any) => {
                  let color = "";
                  const status = "doing";
                  console.log(task.situation);
                  if (task.situation == "done") {
                    color = "green";
                  }
                  if (task.situation == "doing") {
                    color = "orange";
                  }
                  if (task.situation == "pending") {
                    color = "blue";
                  }
                  if (task.situation == "canceled") {
                    color = "red";
                  }
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

              <Flex direction="column">
                <Text
                  bgColor="green"
                  p="2"
                  borderRadius="5"
                  textAlign="center"
                  fontWeight="bold"
                >
                  Finalizado
                </Text>
                {tasks.map((task: any) => {
                  let color = "";
                  const status = "done";
                  console.log(task.situation);

                  if (task.situation == "done") {
                    color = "green";
                  }
                  if (task.situation == "doing") {
                    color = "orange";
                  }
                  if (task.situation == "pending") {
                    color = "blue";
                  }
                  if (task.situation == "canceled") {
                    color = "red";
                  }
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
              <Flex direction="column">
                <Text
                  bgColor="red"
                  p="2"
                  borderRadius="5"
                  textAlign="center"
                  fontWeight="bold"
                >
                  Cancelado
                </Text>
                {tasks.map((task: any) => {
                  let color = "";
                  const status = "canceled";
                  console.log(task.situation);
                  if (task.situation == "done") {
                    color = "green";
                  }
                  if (task.situation == "doing") {
                    color = "orange";
                  }
                  if (task.situation == "pending") {
                    color = "blue";
                  }
                  if (task.situation == "canceled") {
                    color = "red";
                  }
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
