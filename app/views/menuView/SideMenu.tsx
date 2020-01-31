import * as React from 'react';
import * as css from '../../themes/menu.scss';
import { NavLink } from 'react-router-dom';
import { Paths, routes } from '../../enums/routes';
import { joinCSS } from '../../common/AppUtils';

interface MenuProps {
    active: boolean;
}

interface MenuState {
    activeLink: Paths;
}

/**
 * TODO.
 */
export class SideMenu extends React.PureComponent<MenuProps, MenuState> {
    constructor(props: MenuProps) {
        super(props);
        this.state = {
            activeLink: Paths.START // fixme instead  of Paths.START call this.getActivePath()
            // fixme ...and that function will return active path
        };
    }

    private getItemStyle = (item: Paths) => {
      return item === this.state.activeLink ? joinCSS(css.menuItem, css.menuItemActive) : css.menuItem;
    };

    private onMenuItemClick = (path: Paths) => () => {
        this.setState({activeLink: path});
    };

    private renderLinks = () => {
        const links: React.ReactNode[] = [];
        for (const item of routes) {
            links.push(
                <NavLink
                    onClick={this.onMenuItemClick(item.path)}
                    className={this.getItemStyle(item.path)}
                    to={item.path}
                >
                    {item.linkValue}
                    asdadsadasdasdasdasd
                </NavLink>
            );
        }
        return links;
    };

    /**
     * Component render method.
     */
    public render(): React.ReactNode {
        return (
            <div className={css.menuContainer}>
                {this.renderLinks()}
                <div>
                    {String(this.props.active)}
                </div>
            </div>
        );
    }
}
