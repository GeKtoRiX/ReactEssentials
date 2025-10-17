import atomImg from '@/assets/react-core-concepts.png';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.root}>
      <img src={atomImg} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        Core React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
