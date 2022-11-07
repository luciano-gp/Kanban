import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

import { useFormContext } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  data: string | number
  id: string;
}

export function Input({ name, label, data,id, ...rest }: InputProps) {
  const { register } = useFormContext();
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        bgColor="gray.900"
        variant="filled"
        size="lg"
        focusBorderColor="blue.400"
        _hover={{ bgColor: "gray.900" }}
        {...rest}
        {...register(id)}
        data={data}
      />
    </FormControl>
  );
}
