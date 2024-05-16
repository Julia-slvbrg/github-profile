import PropTypes from 'prop-types';
import styles from './Form.module.css'
import { useState } from 'react';

const Form = ({ setUserName }) => {
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            setUserName(inputValue);  
        } catch (error) {
           console.log(error); 
        }
            
    };

    return(
        <form
            className={styles.formContainer}
            onSubmit={onSubmit}
        >
            <div>
                <label >Digite o nome do usuário para exibir o perfil:</label>
                <input 
                    className={styles.formContainer__input}
                    type="text"
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                />
            </div>
            
            <button 
                type="submit"
                className={styles.form__btn}
            >Exibir Perfil</button>

        </form>
    )
};

Form.propTypes = {
    setUserName: PropTypes.func.isRequired
};

export default Form