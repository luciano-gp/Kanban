import { Icon, Flex, Input, keyframes } from "@chakra-ui/react";
import { Key, MagnifyingGlass } from "phosphor-react";

let arrayCards: any;

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
        onFocus={() => {
          arrayFilter();
        }}
        onKeyUp={() => {
          nameFilter();
        }}
      />
      <Icon as={MagnifyingGlass} fontSize={20} id="test" />
    </Flex>
  );
}

const arrayFilter = () => {
  arrayCards = document.querySelectorAll(".cardTask");
}

const nameFilter = () => {
  let description = (
    document.getElementById("searchbox") as HTMLInputElement
  ).value.toLowerCase();
  arrayCards.forEach((card: any) => {
    let descriptionCard = card.querySelector(".cardDescription");
    descriptionCard = descriptionCard.textContent.split(">")[0].toLowerCase();
    !descriptionCard.match(description)
      ? (card.style.display = "none")
      : (card.style.display = "block");
    !description ? card.style.display = "block" : "";
  });
};
