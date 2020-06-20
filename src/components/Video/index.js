import React from 'react'

import { connect } from 'react-redux'

const Video = ({ activeModule, activeLesson }) => (
    <div>
        <strong>
            Módulo: &nbsp; { activeModule.title }
        </strong>

        <br />
        
        <span>
            Aula: &nbsp; { activeLesson.title }
        </span>
    </div>
 )

export default connect(state => ({
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule 
}))(Video)