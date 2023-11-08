import React from 'react';

type PlaceProps = {
    name: string
};

export const PlaceCard = ({name}: PlaceProps) => {
    return (
        <div>
            {name}
        </div>
    );
};
