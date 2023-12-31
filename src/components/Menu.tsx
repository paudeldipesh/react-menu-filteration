interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu = ({ items }: MenuProps) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, image, description, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={image} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
