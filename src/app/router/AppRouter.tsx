import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import { routeConfig } from './routeConfig/routeConfig';
import { Loader } from '@/ui/Loader/Loader';

const AppRouter = () => {
    return (
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<Loader />}>
                                {element}
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
    );
};

export default AppRouter;
