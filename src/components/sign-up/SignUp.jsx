import React from "react";
import { supabase } from "../../supabaseClient";
import { Button, Form, Input, Typography, Row, Col } from "antd";
import signUpImage from "../../assets/signin_image.png"; // You can use same image
import "../sign-in/SignIn.css";

const SignUp = function () {
  const onFinish = async function (values) {
    console.log(values);
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
  email: values.email,
  password: values.password
});
if (signUpError) {
  console.error(signUpError);
  return;
}
const user = signUpData.user;
if (user) {
  const { error: profileError } = await supabase
    .from('profiles')
    .update({
      gamer_tag: values.gamertag // only updating gamertag
    })
    .eq('id', user.id); // match the user's id from auth.users
  if (profileError) {
    console.error('Error updating gamertag:', profileError);
  } else {
    console.log('Gamertag updated successfully');
  }
}
};


  return (
    <Row className="signin-wrapper">
      <Col xs={24} md={15} lg={15} xl={15} xxl={15} className="signin-form-section">
        <div className="form-container">
          <div className="form-row title-row">
            <Typography.Title level={3}>Create an Account</Typography.Title>
            <Typography.Text>Fill in the details to register</Typography.Text>
          </div>

          <Form layout="vertical" onFinish={onFinish} className="full-width-form">
            <div className="form-row">
              <Form.Item
                label="Gamer Tag"
                name="gamertag"
                rules={[{ required: true, message: "Please input your Gamer Tag!" }]}
              >
                <Input placeholder="Enter your Gamer Tag" />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Passwords do not match!");
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm your password" />
              </Form.Item>
            </div>

            <div className="form-row">
              <Form.Item style={{ width: "100%" }}>
                <Button type="primary" htmlType="submit" className="login-button">
                  Sign Up
                </Button>
              </Form.Item>
            </div>
          </Form>

          <div className="form-row">
            <Typography.Text className="form-row-navigate">
              Already have an account? <a href="/signin">Sign In</a>
            </Typography.Text>
          </div>
        </div>
      </Col>

      <Col xs={0} md={9} lg={9} xl={9} xxl={9} className="signin-image-section">
        <div className="image-container">
          <img src={signUpImage} alt="Sign Up Visual" className="signin-image" />
        </div>
      </Col>
    </Row>
  );
};

export default SignUp;
