import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/CategoryCard.module.scss';

interface IProps {
  image: string,
  name: string
}


export default function CategoryCard({ image, name }: IProps) {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} height={700} width={1300} />
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
};
