import React from 'react';
import menuData from '~/public/static/data/menu.json';
import Menu from '~/components/elements/menu/Menu';
import Logo from '~/components/elements/common/Logo';

const MenuCategoriesDropdown = () => {
    return (
        <div className="menu--product-categories">
            <div className="menu__toggle">
               <Logo/>
            </div>
             
        </div>
    );
};

export default MenuCategoriesDropdown;
