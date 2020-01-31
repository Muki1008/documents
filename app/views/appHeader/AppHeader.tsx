import * as React from 'react';
import * as css from '../../themes/header.scss';

/**
 * TODO.
 */
export class AppHeader extends React.PureComponent {

    /**
     * Component render method.
     */
    public render(): React.ReactNode {
        return (
            <div className={css.headerContainer}>
                Header
            </div>
        );
    }
}
