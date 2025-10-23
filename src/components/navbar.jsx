import React from 'react'
import styles from '../styles/navbar.module.css'
import logo from '../assets/mrsauna-logo.webp'

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<div className={styles.brand}>
					<img src={logo} alt="Logo" className={styles.logo} />
				</div>
				<ul className={styles.links}>
					<li><a href="#">Etusivu</a></li>
					<li><a href="#">Yritys</a></li>
					<li><a href="#">Palvelumme</a></li>
					<li><a href="#">Yhteystiedot</a></li>
				</ul>
			</div>
		</nav>
	)
}
