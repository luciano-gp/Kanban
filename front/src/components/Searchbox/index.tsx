import { Icon, Flex, Input } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="2"
      px="4"
      ml="0"
      maxWidth={200}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.700"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        px="4"
        mr="4"
        placeholder="Buscar"
        _placeholder={{ color: "gray.50" }}
        variant="unstyled"
        id="searchbox"
        onKeyUp={() => nameFilter()}
      />
      <Icon as={MagnifyingGlass} fontSize={20} id="test" />
    </Flex>
  );
}

const nameFilter = () => {
  let description = (
    document.getElementById("searchbox") as HTMLInputElement
  ).value.toLowerCase();
  const arrayCards = document.querySelectorAll(".cardTask");
  arrayCards.forEach((card: any) => {
    let descriptionCard = card.querySelector(".cardDescription");
    descriptionCard = descriptionCard.textContent.split(">")[0].toLowerCase();
    !descriptionCard.match(description)
      ? (card.style.display = "none")
      : (card.style.display = "block");
  });
};
