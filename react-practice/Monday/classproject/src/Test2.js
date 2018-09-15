import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Test2 extends Component {
    render () {
        let students = ['Matt', 'Eric', 'Jeff', 'Tracy', 'Melissa', 'Keith', 'Skylar']
        return (
            <div>
                <ul>
                    {students.map(student =>{
                       return  <li key={student}>{student}</li>
                    })}
                </ul>
            </div>
        )
    }
    PropTypes
}

export default Test2;