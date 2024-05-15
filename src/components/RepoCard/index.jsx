import PropTypes from 'prop-types';
import styles from './RepoCard.module.css';

const RepoCard = ({ name, language, link }) => {
    return(
        <li className={styles.listItem}>
            <div className={styles.itemName}>
                <b>Nome:</b>
                {name}
            </div>
            <div className={styles.itemLanguage}>
                <b>Linguagem:</b>
                {language}
            </div>
            <a className={styles.itemLink} target='_blank' href={link}>Ver no GitHub</a>          
        </li>
    )
};

RepoCard.propTypes = {
    name: PropTypes.string,
    language: PropTypes.string,
    link: PropTypes.string
};

export default RepoCard