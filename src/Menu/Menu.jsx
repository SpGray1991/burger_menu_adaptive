import "./Menu.css";

const Menu = ({ header, items, active, setActive }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <div className="menu_content" onClick={(e) => e.stopPropagation()}>
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
