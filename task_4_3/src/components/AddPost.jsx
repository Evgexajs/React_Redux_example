import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthCreator} from '../validators/validator';
import '../style/style.css';
import { TextArea, Input } from './FormControls.jsx';

const maxLength10 = maxLengthCreator(10);
const maxLength30 = maxLengthCreator(30);

function AddPost (props) {
  return (
      <form className="addPost" onSubmit={props.handleSubmit}>
          <h2>Add post</h2>
          <div>
              <Field component={Input} name="title" placeholder={"Title"} validate={[required, maxLength10]}></Field>
          </div>
          <div>
              <Field component={TextArea} name="body" rows="4" cols="20" placeholder={"Body"} validate={[required, maxLength30]}></Field>
          </div>
          <div>
              <button>Send</button>
          </div>
      </form>
    );
}

export default reduxForm({form: 'addPost'})(AddPost);
