import { FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Select,
} from "@chakra-ui/react";
import { DivContainer } from "../card/CardInfo.styles";

interface UserModalProps {
  closeModal: Function;
  taskData?: TaskType;
}

export type TaskType = {
  id: number;
  create: string;
  expire: string;
  description: string;
  priority: number;
  TypeId: number;
  situation: string;
};

export function TaskModal({ closeModal, taskData }: UserModalProps) {
  const methods = useForm<TaskType>({
    defaultValues: {
      create: "",
      expire: "",
      description: "",
      priority: 0,
      TypeId: 0,
      situation: "",
    },
  });

  const { handleSubmit, formState, setValue } = methods;

  console.log(formState);

  useEffect(() => {
    console.log(taskData);
    if (taskData) {
      setValue("create", taskData.create);
      setValue("expire", taskData.expire);
      setValue("description", taskData.description);
      setValue("priority", taskData.priority);
      setValue("TypeId", taskData.TypeId);
    }
  }, [taskData]);

  const { errors } = formState;

  async function handleCrateNewUser(data: TaskType) {
    console.log("acessou");
    try {
      console.log(taskData);
      if (taskData) {
        console.log("acessou");
        await axios.put(`http://localhost:3000/tasks/${taskData.id}`, {
          create: data.create,
          expire: data.expire,
          description: data.description,
          priority: data.priority,
          TypeId: data.TypeId,
          situation: data.situation,
        });

        toast.success("Tarefa Editado com sucesso");
      } else {
        await axios.post("http://localhost:3000/tasks", {
          create: data.create,
          expire: data.expire,
          description: data.description,
          priority: data.priority,
          TypeId: data.TypeId,
          situation: data.situation,
        });

        toast.success("Usuário Criado com sucesso");
      }

      closeModal();
    } catch (error) {
      toast.error("Erro ao criar usuário");
    }
  }

  return (
    <DivContainer>
      <Box h="300">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleCrateNewUser)}>
            <Flex w="100%" gap="8" direction="column">
              <Box>
                <Input title="description" />
              </Box>
              <Box>
                <label htmlFor="">Situação</label>
                <Select name="priority" bg="gray.800" color="gray.600" mt="3">
                  <option value="#">Pendente</option>
                  <option value="#">Fazendo</option>
                </Select>
              </Box>
              <Box>
                <label htmlFor="">Prioridade</label>
                <Select
                  name="priority"
                  bg="gray.800"
                  color="gray.600"
                  placeholder="Escolha"
                  mt="3"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </Select>
              </Box>
              <Box>
                <label htmlFor="">Tipo</label>
                <Select
                  name="TypeId"
                  bg="gray.800"
                  color="gray.600"
                  placeholder="Escolha"
                  mt="3"
                  id="TypeId"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </Select>
              </Box>
              <Box>
                <Input name="create" id="create" type="datetime-local" />
              </Box>
              <Box>
                <Input name="expire" id="expire" type="datetime-local" />
              </Box>
            </Flex>
          </form>
        </FormProvider>
      </Box>
    </DivContainer>
  );
}
