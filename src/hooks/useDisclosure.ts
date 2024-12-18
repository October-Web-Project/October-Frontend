import { useCallback, useState } from "react";

/**
 * @description UI 요소의 가시성을 제어하는데 사용하는 hook입니다. 예를 들어, 모달 창, 드랍다운 메뉴, 사이드바 등과 같은 컴포넌트의 열림/닫힘 상태를 관리할때 유용합니다.
 * @example
 * const { isOpen, onOpen, onClose} = useDisclosure();
 *
 * <button onClick={onOpen}>open</button>
 * <Modal isOpen={isOpen} onClose={onClose}>
 *   <div></div>
 * </Modal>
 */
const useDisclosure = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    setIsOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

export default useDisclosure;
