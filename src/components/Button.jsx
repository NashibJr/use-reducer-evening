/**
 * Stateless components.
 * return jsx.
 * useEffect hook.
 */

function Button({ handleClick, label }) {
  return <button onClick={handleClick}>{label}</button>;
}

export default Button;
