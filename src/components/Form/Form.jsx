import { useState } from 'react';
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
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        comment: '',
    })

    const handleChange = (event) => {
        console.log(event)
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post('/send-email', formData);
            console.log(res.data);
        } catch (err){
            console.error(err);
        }
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.description}>
            <h3 className={styles.subtitle}>Заказать звонок</h3>
            <p className={styles.past}>Отдел продаж нашей компании свяжется с Вами, как только получит заявку. Уверены, что общение с сотрудниками порадует Вас и оставит хорошее впечатление.</p>
            <p className={styles.past}>Пн-Сб: 09:00 - 21:00<br/>Воскресенье выходной <br/><br />Контакты отдела продаж: <br/>sell@poolplace.ru <br/>+7 (499) 113-70-70</p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                
                <label htmlFor="Name"></label>
                <input className={styles.name} type="text" id='Name' name='name' placeholder='Ваше имя' onChange={handleChange} required/>
                
                <label htmlFor="Phone"></label>
                <input className={styles.phone} type="text" id='Phone' name='phone' placeholder='Ваш номер телефона' value={formData.phone} onChange={handleChange} required/>
                
                <label htmlFor="Email"></label>
                <input className={styles.mail} type='email' id='Email' name='email' placeholder='Ваш e-mail' value={formData.email} onChange={handleChange} required></input>
                
                
                <select className={styles.selector} name='City'>
                    <option value="Moscow">Москва</option>
                    <option value="Saint-Petersburg">Санкт-Петербург</option>
                </select>

                <label htmlFor="Text"></label>
                <input className={styles.text} type='text' id='Text' name='comment' placeholder='Комментарий' value={formData.comment} onChange={handleChange} required></input>

                <button type='submit'>Отправить заявку</button>
            </form>
            {/*<span className={styles.personal}>Нажимая кнопку “Отправить заявку”, 
            я соглашаюсь с условиями на передачу
    персональных данных </span>*/}
        </section>
    )
}

export default Form;