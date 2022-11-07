import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  HStack,
  IconButton,
  Icon,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { Envelope, PencilSimple, Tag, Trash } from "phosphor-react";

import useUserEditModal from "../modal/index";

interface TaskProps {
  color: string;
}

export default function Task({ color = "blue" }: TaskProps) {
  const { onOpen, UserEditModal } = useUserEditModal();
  let isGreen;
  if (color == "green") {
    isGreen = true;
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
            <Heading
              fontSize={"2xl"}
              fontWeight={500}
              fontFamily={"body"}
              color="black"
            >
              Título Tarefa
            </Heading>
            <Text color={"gray.500"}>Prioridade</Text>
            <Text color={"gray.500"}>Type</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontSize={"sm"} color={"gray.500"} mb="10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                consequatur magnam animi distinctio, repudiandae facilis iure
                sint ipsam dignissimos nisi amet minima. Reiciendis
                necessitatibus at exercitationem voluptatum rem esse architecto.
              </Text>
            </Stack>
          </Stack>

          <SimpleGrid columns={2} row={2} spacing={2}>
            <Button
              size="sm"
              fontSize="sm"
              colorScheme="green"
              leftIcon={<Icon as={Tag} fontSize={16} />}
              disabled={isGreen}
            >
              Finalizar
            </Button>

            <Button
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={PencilSimple} fontSize={16} />}
              onClick={onOpen}
            >
              Editar
            </Button>
            <Button
              size="sm"
              fontSize="sm"
              colorScheme="red"
              leftIcon={<Icon as={Trash} fontSize={16} />}
            >
              Excluir
            </Button>
            <Button
              size="sm"
              fontSize="sm"
              colorScheme="yellow"
              leftIcon={<Icon as={Envelope} fontSize={16} />}
            >
              E-mail
            </Button>
          </SimpleGrid>
        </Box>
      </Box>
    </Center>
    
  );
}
