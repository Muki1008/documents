import * as React from 'react';
import * as css from '../../themes/header.scss';

interface AppHeaderProps {
    toggleActive: () => void;
}

/**
 * TODO.
 */
export class AppHeader extends React.PureComponent<AppHeaderProps> {

    /**
     * Component render method.
     */
    public render(): React.ReactNode {
        return (
            <div onClick={this.props.toggleActive} className={css.headerContainer}>
                Headera
            </div>
        );
    }
}
