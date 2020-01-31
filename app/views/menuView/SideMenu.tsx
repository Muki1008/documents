import * as React from 'react';
import * as css from '../../themes/menu.scss';

/**
 * TODO.
 */
export class SideMenu extends React.PureComponent {

    /**
     * Component render method.
     */
    public render(): React.ReactNode {
        return (
            <div className={css.menuContainer}>
                SideMenu
            </div>
        );
    }
}
