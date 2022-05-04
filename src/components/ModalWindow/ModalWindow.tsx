import { Button } from "../Button/Button";
import { Icon } from "../Button/SvgIcon/Icon";
import { SvgIcon } from "../Button/SvgIcon/SvgIcon";
import './ModalWindow.scss';

export type ModalProps = {
  hidden?: boolean;
  onClick: () => void;
  onClose: () => void;
};

export const ModalWindow = (props: ModalProps) => {
  if (props.hidden) return null;
  return (
    <div className="modal-window" onClick={props.onClose}>
        <div className="modal-conteiner">
            <div className="text">
      <p>Вы хотите удалить этот товар?</p>
      <p>Серьезно?</p>
      </div>
      <div><SvgIcon icon={Icon.Pingvin}/></div>
      <div className="button-conteiner">
        <Button text="Да" onClick={props.onClick} />
        <Button text="Нет" onClick={props.onClose} />
      </div>
      </div>
    </div>
  );
};
