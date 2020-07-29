import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Branches.css';

const HEIGHT = 100;

const Branches = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const width = window.innerWidth;
        ctx.lineWidth = 10;

        props.branches.forEach(branch => {
            const startX = branch.from.position * width;
            const startY = 0;
            const endX = branch.to.position * width;
            const endY = HEIGHT;
            const midPointX = startX + (endX - startX)/2;
            const midPointY = startY + (endY - startY)/2;

            const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
            gradient.addColorStop(0, branch.from.color);
            gradient.addColorStop(1, branch.to.color);
            ctx.strokeStyle = gradient;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.quadraticCurveTo(startX, midPointY, midPointX, midPointY);
            ctx.quadraticCurveTo(endX, midPointY, endX, endY);
            ctx.stroke();
        })
    });

    return (
        <canvas height={HEIGHT} width={window.innerWidth} ref={canvasRef} />
    )
}

Branches.propTypes = {
    branches: PropTypes.arrayOf(
        PropTypes.exact({
            from: PropTypes.exact({
                position: PropTypes.number,
                color: PropTypes.string
            }),
            to: PropTypes.exact({
                position: PropTypes.number,
                color: PropTypes.string
            })
        })
    ).isRequired
}

export default Branches;