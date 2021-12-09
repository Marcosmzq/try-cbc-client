import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

interface DialogModalProps {
  isFullWidth?: boolean;
  buttonText: string;
  modalHeader: string;
  modalBody: string;
}

export const DialogModal: React.FC<DialogModalProps> = ({
  isFullWidth = false,
  buttonText,
  modalHeader,
  modalBody,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        isFullWidth={isFullWidth}
        variant="primarySolid"
        leftIcon={<InfoIcon />}
        onClick={onOpen}
      >
        {buttonText}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalHeader} </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalBody}</ModalBody>

          <ModalFooter>
            <Button colorScheme="red" variant="solid" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
