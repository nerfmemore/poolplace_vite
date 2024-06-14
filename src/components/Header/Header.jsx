import styles from '../Header/header.module.scss';
import { useCity } from '../../CityContext';
import Select from 'react-select';
import { Placeholder, SingleValue } from 'react-select/animated';

function Header(){
    const {selectedCity, setSelectedCity} = useCity();

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    }

    const handleChange = (selectedOption) => {
        setSelectedCity(selectedOption.value)
    }

    const options = [
        {value: 'Москва', label: 'Москва', color: '#2699FB'},
        {value: 'Санкт-Петербург', label: 'Санкт-Петербург', color: '#2699FB'}
    ]

    const colorStyles = {
        dropdownIndicator: (styles) => ({
            ...styles,
            color: 'white',
        }),
        control: (styles) => ({ ...styles,  border: 'none', borderRadius: '5px',color: 'white', backgroundColor: 'rgba(143, 205, 238, 0.5)', boxShadow: 'none', cursor: 'pointer'}),
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
        singleValue: (styles) => ({
            ...styles,
            color: 'white'
        })
    }

    return (
        <>
            <div className={styles.background}>
                <a href='tel:+74991137070' className={styles.number}>+7 (499) 113-70-70</a>
               {/*<img src='/logo.svg' alt='logo' className={styles.logo}></img>*/}
               {/*<div className={styles.menu}>
                    <span className={styles.point}>О компании</span>
                    <span className={styles.point}>Каталог</span>
                    <span className={styles.point}>Услуги</span>
                    <span className={styles.point}>Галерея</span>
                    <span className={styles.point}>Акции</span>
                    <span className={styles.point}>Контакты</span>
                </div>*/}
                {/*<button className={styles.button}>Оставить заявку</button>*/}
                {/*<div className={styles.number}>Москва</div>*/}
                <Select className={styles.selector} options={options} onChange={handleChange} isSearchable={false} defaultValue={{value: selectedCity, label: selectedCity}} value={{value: selectedCity, label: selectedCity}} styles={colorStyles}/>
                {/*<select name="City" id="123" className={styles.selector} value={selectedCity} onChange={handleCityChange}>
                    <option value="Москва">Москва</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
            </select>*/}
            </div>
        </>
    )
}

export default Header;