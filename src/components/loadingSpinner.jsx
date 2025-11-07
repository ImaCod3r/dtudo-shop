import "../styles/LoadingSpinner.css";

export default function Spinner({
  size = 48,
  thickness = 4,
  color = "blue",
  variant = "border",
  label = "Carregando..."
}) {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const borderStyle = {
    borderWidth: `${thickness}px`,
    borderColor: `${color} transparent ${color} transparent`
  };

  const dotStyle = {
    width: `${Math.max(6, Math.round(size / 6))}px`,
    height: `${Math.max(6, Math.round(size / 6))}px`,
    backgroundColor: color,
  };

  return (
    <div className="spinner-wrapper" style={style} role="status" aria-live="polite" aria-label={label}>
      {variant === "border" ? (
        <div className="spinner-border" style={{ ...style, ...borderStyle }} />
      ) : (
        <div className="spinner-dots" style={style}>
          <div className="dot" style={dotStyle} />
          <div className="dot" style={dotStyle} />
          <div className="dot" style={dotStyle} />
        </div>
      )}

      <span className="visually-hidden">{label}</span>
    </div>
  );
}