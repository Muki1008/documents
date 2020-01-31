export enum Paths {
    START = '',
    DOCUMENTS = '/documents',
    USERS = '/users'
}

export interface RouteConfig {
    path: Paths;
    linkValue: string;
}

export const routes: RouteConfig[] = [
    {
        linkValue: 'Start',
        path: Paths.START
    }, {
        linkValue: 'Documents',
        path: Paths.DOCUMENTS
    }, {
        linkValue: 'Users',
        path: Paths.USERS
    }
];
