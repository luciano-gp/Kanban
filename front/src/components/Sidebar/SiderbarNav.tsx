import { Box, Button, Icon, Stack } from "@chakra-ui/react";
import { FilePdf, Aperture, Checks } from "phosphor-react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={Checks} label="Tarefas" href="/tasks" />
        <NavLink icon={Aperture} label="Tipos" href="/type/create" />
        <Button
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="green"
          leftIcon={<Icon as={FilePdf} fontSize={16} />}
        >
          Gerar PDF
        </Button>
      </NavSection>
    </Stack>
  );
}
