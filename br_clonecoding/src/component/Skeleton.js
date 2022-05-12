import React from 'react';
import '../assets/css/Skeleton.css';
const Skeleton = ({skeleton}) => {
    return (
        <>
        {skeleton &&
            <>
            <li className="skeleton-item">
                 <div className="skeleton-img" />
            </li>
            <li className="skeleton-item">
                 <div className="skeleton-img" />
            </li>
            <li className="skeleton-item">
                 <div className="skeleton-img" />
            </li>
            <li className="skeleton-item">
                 <div className="skeleton-img" />
            </li>
            <li className="skeleton-item">
                 <div className="skeleton-img" />
            </li>
            </>
        }
        </>
    );
};

export default React.memo(Skeleton);