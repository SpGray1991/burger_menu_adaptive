import "./Menu.css";

const Menu = ({ header, items }) => {
  return (
    <div className="menu">
      <div className="blur" />
      <div className="menu_content">
        <div className="menu_header">{header}</div>
        <ul>
          {items.map((item) => (
            <li>
              <a href={item.href}>{item.value}</a>
              <span className="material-icons">{item.icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
