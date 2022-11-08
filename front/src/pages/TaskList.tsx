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
import Task from "../components/card";
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
              <Flex gap={2} mx="250">
                <Text
                  as="a"
                  size="sm"
                  fontSize="sm"
                  bgColor="green"
                  p="2"
                  borderRadius={5}
                >
                  Concluido
                </Text>
                <Text
                  as="a"
                  size="sm"
                  fontSize="sm"
                  bgColor="orange"
                  p="2"
                  borderRadius={5}
                >
                  Fazendo
                </Text>
                <Text
                  as="a"
                  size="sm"
                  fontSize="sm"
                  bgColor="blue"
                  p="2"
                  borderRadius={5}
                >
                  Pendente
                </Text>
                <Text
                  as="a"
                  size="sm"
                  fontSize="sm"
                  bgColor="red"
                  p="2"
                  borderRadius={5}
                >
                  Cancelado
                </Text>
              </Flex>
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
                Pendente
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
                  const createDate = task.create.split("T");
                  const expireDate = task.expire.split("T");
                  if (status == task.situation) {
                    return (
                      <Task
                        color={color}
                        description={task.description}
                        type={typeName}
                        priority={task.priority}
                        create={createDate[0]}
                        expire={expireDate[0]}
                        id={task.id}
                      />
                    );
                  }
                })}
              </Flex>
              <Flex direction="column">
                Fazendo
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
                  const createDate = task.create.split("T");
                  const expireDate = task.expire.split("T");
                  if (status == task.situation) {
                    return (
                      <Task
                        color={color}
                        description={task.description}
                        type={typeName}
                        priority={task.priority}
                        create={createDate[0]}
                        expire={expireDate[0]}
                        id={task.id}
                      />
                    );
                  }
                })}
              </Flex>

              <Flex direction="column">
                Finalizado
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
                  const createDate = task.create.split("T");
                  const expireDate = task.expire.split("T");
                  if (status == task.situation) {
                    return (
                      <Task
                        color={color}
                        description={task.description}
                        type={typeName}
                        priority={task.priority}
                        create={createDate[0]}
                        expire={expireDate[0]}
                        id={task.id}
                      />
                    );
                  }
                })}
              </Flex>
              <Flex direction="column">
                Cancelado
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
                  const createDate = task.create.split("T");
                  const expireDate = task.expire.split("T");
                  if (status == task.situation) {
                    return (
                      <Task
                        color={color}
                        description={task.description}
                        type={typeName}
                        priority={task.priority}
                        create={createDate[0]}
                        expire={expireDate[0]}
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

{
}
