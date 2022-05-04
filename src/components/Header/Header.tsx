import moment from "moment";
import "moment/locale/ru";
import "./Header.scss";

export const Header = () => {
  const today = moment();
  return (
    <div className="header">
        <h1>Заказ #132</h1>
      <div className="caption">      
        <p>Адрес: СПб, пр. Ленина, д.3, кв.1</p>
      <p>Дата: {today.format("dddd, MM.DD.YYYY г.")}</p>
      </div>
    </div>
  );
};
