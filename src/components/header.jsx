import styles from './header.module.css'

import igniteLogo from '../assets/logo-light.png'
console.log(igniteLogo)

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do ignite" />
        </header>
    )
}