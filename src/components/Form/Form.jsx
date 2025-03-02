import { useState } from 'react';
import { useCity } from '../../CityContext';
import Select from 'react-select';
import axios from 'axios';
import styles from '../Form/form.module.scss';


async function handleSubmi(event){
    event.preventDefault();
    console.log(event)
    const data = {
        Name: event.target.Name.value,
        Phone: event.target.Phone.value,
        Email: event.target.Email.value,
        City: event.target.City.value,
        Comment: event.target.Text.value,
    }

    console.log(data)
    
    const jsonData = JSON.stringify(data);

    const response = await fetch('/api/sendMail.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData,
    })

    const result = await response.json();
    console.log(result.data)
}

function Form(){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    //const [city, setCity] = useState('Москва');
    const [comment, setComment] = useState('');
    const { city, setCity } = useCity();

    const handleChange = (selectedOption) => {
        setCity(selectedOption.value)
    }

    const options = [
        {value: 'Москва', label: 'Москва', color: '#2699FB'},
        {value: 'Санкт-Петербург', label: 'Санкт-Петербург', color: '#2699FB'}
    ]

    const colorStyles = {
        control: (styles) => ({ ...styles, border: 'none', borderRadius: '5px',color: 'blue', backgroundColor: 'white', boxShadow: 'none', cursor: 'pointer'}),
        option: (styles, {data, isDisabled, isFocused, isSelected}) => {
            console.log('option', data, isDisabled, isFocused, isSelected, styles);
            return { 
                ...styles, 
                backgroundColor: 'white', 
                color: data.color, 
                border: 'none', 
                cursor: 'pointer',
                ':hover': {
                    backgroundColor: '#F6F6F6',
                }
            };
        },
        singleValue: (styles) => {
            return {
                ...styles,
                className: styles.singleValue,
                color: '#2699FB',
                paddingLeft: '20px'
            }
        }
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    function sendMail(){
        if (name && phone && email && city) {
            axios.post('/send_email', {
                name,
                phone,
                email,
                city,
                comment
            }).then(() => alert('Message Send Succesfuly'))
            .catch(() => alert('Something wrong'));
            return;
        }
        return alert('Заполните все поля')
    }
    
    return (
        <section className={styles.wrapper}>
            <div className={styles.description}>
            <h3 className={styles.subtitle}>Заказать звонок</h3>
            <p className={styles.past}>Отдел продаж нашей компании свяжется с Вами, как только получит заявку. Уверены, что общение с сотрудниками порадует Вас и оставит хорошее впечатление.</p>
            <p className={styles.past}>Пн-Сб: 09:00 - 21:00<br/>Воскресенье выходной <br/><br />Контакты отдела продаж: <br/>sell@poolplace.ru <br/>+7 (499) 113-70-70</p>
            
            </div>
            <form className={styles.form}>
                
                <label htmlFor="Name"></label>
                <input className={styles.name} type="text" id='Name' name='name' placeholder='Ваше имя' onChange={e => setName(e.target.value)} required/>
                
                <label htmlFor="Phone"></label>
                <input className={styles.phone} type="text" id='Phone' name='phone' placeholder='Ваш номер телефона' onChange={e => setPhone(e.target.value)} required/>
                
                <label htmlFor="Email"></label>
                <input className={styles.mail} type='email' id='Email' name='email' placeholder='Ваш e-mail' onChange={e => setEmail(e.target.value)} required></input>
                
                <Select onChange={handleChange} className={styles.selector} options={options} isSearchable={false} defaultValue={{value: city, label: city}} value={{value: city, label: city}} styles={colorStyles}></Select>
                {/*<select className={styles.selector} name='City' value={selectedCity} onChange={handleCityChange}>
                    <option value="Москва">Москва</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
    </select>*/}

                <label htmlFor="Text"></label>
                <textarea className={styles.text} type='text' id='Text' name='comment' placeholder='Комментарий' onChange={e => setComment(e.target.value)}></textarea>

                <button className={styles.inbutton} type='submit' onClick={() => sendMail()}>Отправить заявку</button>
            </form>
            {/*<span className={styles.personal}>Нажимая кнопку “Отправить заявку”, 
            я соглашаюсь с условиями на передачу
    персональных данных </span>*/}
        </section>
    )
}

export default Form;