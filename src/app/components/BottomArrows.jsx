import React from 'react';
import BottomCardArrow from './BottomCardArrow';

function BottomArrows() {
    return (
        <div>
            <div className="flex flex-row w-full justify-between">
                <BottomCardArrow className="rotate-0 right-0" />
                <BottomCardArrow className="rotate-90" />
            </div>
        </div>
    );
}

export default BottomArrows;
