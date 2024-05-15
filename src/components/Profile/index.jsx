import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ userName }) => {

    return(
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${userName}.png`} alt="Foto do perfil do GitHub" />
            <h1 className={styles.name}>
                {userName}
            </h1>
        </header>
    )
};

Profile.propTypes = {
    userName: PropTypes.string.isRequired
};

export default Profile

