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
import { Envelope, PencilSimple, Tag, Trash } from "phosphor-react";
import Swal from "sweetalert2";
import { TaskType, TaskModal } from "../modais/TaskModal";
import withReactContent from "sweetalert2-react-content";
interface TaskProps {
  color: string;
  description: string;
  priority: string;
  type: string;
  create: string;
  expire: string;
  data: TaskType;
}

export default function Task({
  color = "blue",
  description,
  priority,
  type,
  create,
  expire,
  data,
}: TaskProps) {
  let isGreen: any;
  if (color == "green") {
    isGreen = true;
  }
  const MySwal = withReactContent(Swal);
  const showSwal = () => {
    MySwal.fire({
      title: <strong>Editar Tarefa</strong>,
      html: <TaskModal closeModal={MySwal.close} taskData={data} />,
      showConfirmButton: false,
    }).then(() => window.location.reload());
  };
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
              onClick={showSwal}
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
