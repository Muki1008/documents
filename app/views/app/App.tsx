import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import * as styles from '../../themes/app.scss';
import { UsersView } from '../UsersView/UsersView';
import { Paths } from '../../enums/routes';
import { StartView } from '../startView/StartView';
import { DocumentsView } from '../documentsView/DocumentsView';
import { AppHeader } from '../appHeader/AppHeader';
import { SideMenu } from '../menuView/SideMenu';

interface AppState {
    active: boolean;
}

// oooopaaaa

/**
 * The application component that displays the application.
 */
export class App extends React.PureComponent<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            active: true
        };
    }

    toggleActive = () => {
        this.setState({
            active: !this.state.active
        });
    };

    public render() {
        return (
            <Router>
                <div>
                    <AppHeader toggleActive={this.toggleActive}/>
                    <div className={styles.appContainer}>
                        <SideMenu active={this.state.active}/>
                        <div className={styles.menuContainer}>
                            <Route path={Paths.START} component={StartView} exact={true}/>
                            <Route path={Paths.USERS} component={UsersView} exact={true}/>
                            <Route path={Paths.DOCUMENTS} component={DocumentsView} exact={true}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
