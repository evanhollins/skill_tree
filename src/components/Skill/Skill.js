import React from 'react';
import PropTypes from 'prop-types'

import "./Skill.css";

const Skill = (props) => {
    return (
        <div className="skill_container">
            <div className="skill" style={{borderColor: props.color}}>
                <div className="skill_text">
                    {props.title}
                </div>
            </div>
        </div>
    )
}

Skill.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Skill;