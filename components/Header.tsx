import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss';

export default function Header() {

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={styles.header_left}>
            <Link href="/">
              <a>
                <h1 className={styles.title}>GAMESKART</h1>
              </a>
            </Link>
          </div>
          <div className={styles.header_right}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_item}>
                <Link href="/shop">
                  <a>
                    Shop
                  </a>
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link href="/cart">
                  <a>
                    Cart
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
