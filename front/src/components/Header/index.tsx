import { useContext } from "react";
import {
  Button,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { List } from "phosphor-react";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
      align="center"
      borderBottomWidth={1}
      borderColor="gray.700"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Abrir Navegação"
          icon={<Icon as={List} />}
          fontSize={24}
          variant="unstyled"
          mr="2"
        />
      )}
      <Logo />

     
      <Flex align="center" ml="auto"></Flex>
    </Flex>
  );
}
