import styles from './CoreConcept.module.scss';

export default function CoreConcept({ title, description, image }) {
  return (
    <li>
      <div className={styles.root}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
