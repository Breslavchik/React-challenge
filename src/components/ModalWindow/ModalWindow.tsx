import { Button } from "../Button/Button";

export type ModalProps = {
  hidden?: boolean;
  onClick: () => void;
  onClose: () => void;
};

export const ModalWindow = (props: ModalProps) => {
  if (props.hidden) return null;
  return (
    <div className="modal-window" onClick={props.onClose}>
      <p>Вы хотите удалить этот товар? Вы хорошо подумали?</p>
      <div className="button-conteiner">
        <Button text="Да" onClick={props.onClick} />
        <Button text="Нет" onClick={props.onClose} />
      </div>
    </div>
  );
};
