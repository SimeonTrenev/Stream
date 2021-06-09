import React from "react";
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

//   renderInput = (formProps) => {  // === ({ input, label, meta }) 
//   const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`  
//   return (
//       <div className={className}>
//           <label>{formProps.label}</label>
//         <input {...formProps.input} autoComplete="off" />  
//         {this.renderError(formProps.meta)}  
//       </div>                                // === <input {...input} />
//     );
//   }

  onSubmit = (formValues) => {
    this.props.createStream(formValues)
  }

  render() {
   return (   
    <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
    </div>
   );
  }
}

export default connect(null, { createStream }) (StreamCreate)
