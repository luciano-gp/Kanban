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

import useUserEditModal from "../components/Modais/UserEditModal";
import Task from "../components/card";

export function TaskList() {
  const { onOpen, UserEditModal } = useUserEditModal();
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
            <Task color="blue"/>
            <Task color="orange"/>
            <Task color="green"/>
          </SimpleGrid>
        </Box>
      </Flex>
      {UserEditModal}
    </Flex>
  );
}
