import React from 'react';
import { connect } from 'react-dropdown';
import * as courseAction from '../../actions/courseAction';


class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: "" }
        };
        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave() {
        this.props.dispatch(courseAction.createCourse(this.state.course));
        //alert(`Saving ${this.state.course.title}`);
    }

    courseRow(course,index){
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <div>
                <h1>Course</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}></input>
                <input type="submit" onClick={this.onClickSave} value="Save"></input>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursePage);