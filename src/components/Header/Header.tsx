import moment from "moment";
import 'moment/locale/ru';
import './Header.scss';


export const Header =()=>{
    const today = moment();
    return (
        <div className="header">
            <div className="caption">
                <h1>Заказ #132</h1>
                <p>Адрес: СПб, пр. Ленина, д.3, кв.1</p>
            </div>
            <div>
                Дата: {today.format('dddd, MMMM DD YYYY')}
            </div>
        </div>
    )
}