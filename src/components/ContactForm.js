import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";
import { postFeedback } from "../features/feedback/feedbackSlice";
import { useDispatch } from "react-redux";


const initialValues = {
  firstName: "",
  lastName: "",
  phoneNum: "",
  email: "",
  agree: false,
  contactType: "By Phone",
  feedback: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const feedback = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNum: values.phoneNum,
      email: values.email,
      agree: values.agree,
      contactType: values.contactType,
      feedback: values.feedback,
      date: new Date(Date.now()).toISOString(),
    };
    dispatch(postFeedback(feedback));
    console.log(feedback);
  };


  return (
    <>
      <Formik 
        
          onSubmit={handleSubmit}
          initialValues={initialValues}>
        <Form>
          <FormGroup row>
            <Label htmlFor="firstName" md="2">
              First Name
            </Label>
            <Col md="10">
              <Field
                name="firstName"
                className="form-control"
                placeholder=" First Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="lastName" md="2">
              Last Name
            </Label>
            <Col md="10">
              <Field
                name="lastName"
                className="form-control"
                placeholder="Last Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="phoneNum" md="2">
              Phone
            </Label>
            <Col md="10">
              <Field
                name="phone"
                className="form-control"
                placeholder="Phone"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email" md="2">
              Email
            </Label>
            <Col md="10">
            <Field
                name="email"
                className="form-control"
                placeholder="Email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
          <Label check md={{ size: 4, offset: 2 }}>
                        <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                        />{' '}
                        May we contact you?
                    </Label>
            <Col md="4">
            <Field
                className="form-control"  name='contactType' and as='select'><option>By Phone</option>
                <option>By Email</option></Field>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="feedback" md="2">
              Your Feedback
            </Label>
            <Col md="10">
              <Field className="form-control" name='feedback'as='textarea' rows='12'/>
            </Col>
          </FormGroup>
          <FormGroup row></FormGroup>
          <Button type='submit' color='primary'>Submit</Button>

        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
