export default function Section({ children, title, ...styles }) {
  return (
    <section {...styles}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
