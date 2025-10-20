export default function TabButton({ children, isSelected, ...actions }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...actions}>
        {children}
      </button>
    </li>
  );
}
