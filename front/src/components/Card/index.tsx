import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Flex,
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
  if (color == "green.700") {
    isGreen = true;
  }
  if (color == "red.700") {
    isRed = true;
  }
  return (
    <Center py={6} className="cardTask">
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("gray.700", "white")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box h="10" w={"full"} bgColor={color} objectFit={"cover"} />

        <Box px={4} py={2}>
          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text
                color={"gray.200"}
                mb="2"
                fontSize={"2xl"}
                fontWeight={500}
                fontFamily={"body"}
                textAlign="center"
                className="cardDescription"
              >
                {description}
              </Text>
            </Stack>
          </Stack>
          <Flex pb={1} mb="2">
            <Stack spacing={0} mx="auto">
              <Text fontSize="12" color={"gray.300"} className="cardTypes">
                Tipo: {type}
              </Text>
              <Text fontSize="12" color={"gray.300"}>
                Prioridade: {priority}
              </Text>
            </Stack>
            <Stack spacing={0} align={"left"} mx="auto">
              <Text fontSize="12" color={"gray.300"}>
                Criação: {create}
              </Text>
              <Text fontSize="12" color={"gray.300"}>
                Validade: {expire}
              </Text>
            </Stack>
          </Flex>
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
