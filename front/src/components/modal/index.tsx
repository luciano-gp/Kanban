import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useMemo } from "react";


export default function UserEdit() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  console.log(isOpen);

  const UserEditModal = useMemo(() => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }, [isOpen, onClose]);

  return {
    onOpen,
    onClose,
    UserEditModal,
  };
}