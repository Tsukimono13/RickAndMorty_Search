import { memo } from "react";

export const NotFoundPage = memo(() => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <h2 className="bold text-3xl">Страница не найдена</h2>
        </div>
    );
});
