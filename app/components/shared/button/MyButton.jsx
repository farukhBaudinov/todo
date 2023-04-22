import s from "./MyButton.module.scss";

const MyButton = ({ children, theme, ...props }) => {
  const getTheme = (theme) => {
    switch (theme) {
      case "filled": return s.filled;
      case "cancel": return s.cancel;
      case 'outline': return s.outline
      default: return "";
    }
  };

  return (
    <button className={[s.button, getTheme(theme)].join(" ")} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
