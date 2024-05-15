import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import RepoCard from '../RepoCard';
import styles from './ReposList.module.css';

const ReposList = ({ userName }) => {
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoadig] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}/repos`)
        .then(res =>  res.json())
        .then(resJson => {
            setIsLoadig(false)
            setRepos(resJson);
        })
    }, [userName]);

    
    return(
        <div className='container'>
            {
                isLoading? (
                    <h1>Carregando...</h1>
                ) : (
                    <ul className={styles.list}>
                    {
                        repos.map(({name, language, html_url, id }) =>{
                            return(
                                <RepoCard
                                    key={id}
                                    name={name}
                                    language={language}
                                    link={html_url}
                                />
                            )
                        })
                    }
                    </ul>
                )
            }
            
        </div>
    )
};

ReposList.propTypes = {
    userName: PropTypes.string.isRequired
};

export default ReposList