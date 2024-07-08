import Logo from '@/assets/icons/logo.svg';
import { FiltersBlock } from '@/pages/MainPage/components/ui/FiltersBlock';
import { memo } from 'react';

export const LeftSide = memo(() => {
    return (
        <div
            className="
        w-1/2 bg-[#ADD3E8] pl-12 pt-10 pr-12 sticky top-0 left-0 h-screen overflow-auto 
        max-md:h-full max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:px-4 max-md:pt-6 max-md:static"
        >
            <Logo />
            <FiltersBlock />
        </div>
    );
});
