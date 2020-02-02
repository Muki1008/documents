import * as React from 'react';
import * as css from '../../themes/menu.scss';
import { NavLink } from 'react-router-dom';
import { Paths, routes } from '../../enums/routes';
import { joinCSS } from '../../common/AppUtils';
import * as Icons from '@material-ui/icons';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { ExpansionPanelDetails, ExpansionPanelSummary, withStyles } from '@material-ui/core';

interface MenuProps {
    active: boolean;
}

interface MenuState {
    activeLink: Paths;
}

const ExpansionDetails = withStyles({
    root: {
        display: 'block',
        backgroundColor: 'orange',
        transition: 'none'
    }
})(ExpansionPanelDetails);

const Summary = withStyles({
    root: {
        backgroundColor: 'blue',
        transition: 'none'
    }
})(ExpansionPanelSummary);

const Panel = withStyles({
    root: {
        backgroundColor: 'red!important',
        transition: 'none'
    }
})(ExpansionPanel);

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
                <Panel>
                    <ExpansionDetails>
                       <div>Start</div>
                    </ExpansionDetails>
                </Panel>
                <Panel>
                    <Summary
                        expandIcon={<Icons.ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                       Tables
                    </Summary>
                    <ExpansionDetails>
                        <div>Documents</div>
                        <div>Users</div>
                        <div>Suppliers</div>
                    </ExpansionDetails>
                </Panel>
            </div>
        );
    }
}
