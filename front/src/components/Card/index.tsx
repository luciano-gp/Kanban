import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import { Envelope, PencilSimple, Prohibit, Tag, Trash } from "phosphor-react";

interface TaskProps {
  color: string;
  description: string;
  priority: string;
  type: string;
  create: string;
  expire: string;
  id: number;
}

export default function Task({
  color = "blue",
  description,
  priority,
  type,
  create,
  expire,
  id,
}: TaskProps) {
  let isGreen: any;
  let isRed: any;
  if (color == "green") {
    isGreen = true;
  }
  if (color == "red") {
    isRed = true;
  }
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box h="10" w={"full"} bgColor={color} objectFit={"cover"} />

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading></Heading>
            <Text color={"gray.500"}>Tipo: {type}</Text>
            <Text color={"gray.500"}>Prioridade: {priority}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text
                color={"gray.800"}
                mb="10"
                fontSize={"2xl"}
                fontWeight={500}
                fontFamily={"body"}
              >
                {description}
              </Text>
            </Stack>
          </Stack>
          <Box>
            <Text color={"gray.500"}>Criação: {create}</Text>
            <Text color={"gray.500"}>Validade: {expire}</Text>
          </Box>
          <SimpleGrid columns={5} row={1} spacing={2}>
            <Button
              size="sm"
              fontSize="sm"
              colorScheme="green"
              disabled={isGreen}
              onClick={() => {
                endTask(id);
              }}
            >
              {<Icon as={Tag} fontSize={16} />}
            </Button>
            <Button size="sm" fontSize="sm" colorScheme="pink">
              {<Icon as={PencilSimple} fontSize={16} />}
            </Button>
            <Button
              size="sm"
              fontSize="sm"
              colorScheme="red"
              onClick={() => {
                deleteTask(id);
              }}
            >
              {<Icon as={Trash} fontSize={16} />}
            </Button>
            <Button size="sm" fontSize="sm" colorScheme="yellow">
              {<Icon as={Envelope} fontSize={16} />}
            </Button>
            <Button
              size="sm"
              fontSize="sm"
              colorScheme="orange"
              disabled={isRed}
              onClick={() => {
                cancelTask(id);
              }}
            >
              <Icon as={Prohibit} fontSize={16} />
            </Button>
          </SimpleGrid>
        </Box>
      </Box>
    </Center>
  );
}

const deleteTask = (id: number) => {
  axios.delete(`http://localhost:3001/tasks/${id}`);
};

const endTask = (id: number) => {
  axios.put(`http://localhost:3001/tasks/`, {
    id: id,
    situation: "done",
  });
};

const cancelTask = (id: number) => {
  axios.put(`http://localhost:3001/tasks/`, {
    id: id,
    situation: "canceled",
  });
};
