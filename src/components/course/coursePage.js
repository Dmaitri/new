import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseAction';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: "" }
        };
        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
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

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   };
// }

export default connect(mapStateToProps)(CoursesPage);