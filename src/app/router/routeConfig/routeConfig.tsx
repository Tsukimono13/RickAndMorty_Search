import { CharacterDetailedPage } from '@/pages/CharacterDetailedPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

interface AppRouteProps {
    path: string;
    element: JSX.Element;
}

export enum AppRoutes {
    MAIN = 'main',
    CHARACTER = 'character',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CHARACTER]: '/character/', // + :id
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.CHARACTER]: {
        path: `${RoutePath.character}:id`,
        element: <CharacterDetailedPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
