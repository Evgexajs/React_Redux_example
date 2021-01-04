import React from 'react';
import {reduxForm, Field} from 'redux-form';
import '../style/style.css';

function AddPost (props) {
  return (
      <form className="addPost" onSubmit={props.handleSubmit}>
          <h2>Add post</h2>
          <div>
              <Field component="input" name="title" placeholder={"Title"}></Field>
          </div>
          <div>
              <Field component="textarea" name="body" placeholder={"Body"}></Field>
          </div>
          <div>
              <button>Send</button>
          </div>
      </form>
    );
}

export default reduxForm({form: 'addPost'})(AddPost);
