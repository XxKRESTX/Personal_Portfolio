import React from 'react';
import TopCorner from './TopCardArrow';

function TopArrows() {
    return (
        <div>
            <div className="flex flex-row w-full justify-between">
                <TopCorner className=" left-0" />
                <TopCorner className="rotate-90 right-0" />
            </div>
        </div>
    );
}

export default TopArrows;
