import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  HStack,
  theme,
  useBreakpointValue,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Plus, PencilSimple, Trash, Tag, FilePdf } from "phosphor-react";
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";

import Task from "../components/card";

import axios from "axios";

const data = await axios.get("http://localhost:3000/tasks");
const tasks = data.data;

const dataTypes = await axios.get("http://localhost:3000/types");
const types = dataTypes.data;

export function TaskList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
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

            <Link to="create">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={Plus} fontSize={16} />}
              >
                Nova tarefa
              </Button>
            </Link>
          </Flex>
          <SimpleGrid columns={3} spacing={10}>
            {tasks.map((task: any) => {
              console.log(types);
              let cor = "";
              if (task.situation == "done") {
                cor = "green";
              } else if (task.situation == "doing") {
                cor = "orange";
              } else if (task.situation == "pending") {
                cor = "blue";
              }
              let typeName = "";
              types.map((type: any) => {
                console.log(task);
                if (type.id == task.TypeId) {
                  typeName = type.description;
                }
              });

              return (
                <Task
                  color={cor}
                  description={task.description}
                  type={typeName}
                  priority={task.priority}
                  create={task.create}
                  expire={task.expire}
                />
              );
            })}
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  );
}
