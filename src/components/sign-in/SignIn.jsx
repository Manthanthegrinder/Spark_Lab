import React from "react";
import { Button, Form, Input, Typography, Row, Col, Divider } from "antd";

import signInImage from '../../assets/signin_image.png';
import "./SignIn.css";

const SignIn = function () {
  const onFinish = function (values) {
    console.log("Received values:", values);
    // Add Supabase or other login logic here
  };

  return (
    <Row className="signin-wrapper">
      <Col xs={24} md={15} lg={15} xl={15} xxl={15} className="signin-form-section">
        <div className="form-container">
          <div className="form-row title-row">
            <Typography.Title level={3} >Welcome back!</Typography.Title>
            <Typography.Text>Enter your Credentials to access your account</Typography.Text>
          </div>

          <Form layout="vertical" onFinish={onFinish} className="full-width-form">
            <div className="form-row">
              <Form.Item
                label="Email address"
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
            </div>

            <div className="form-row">
              <Form.Item style={{ width: "100%" }}>
                <Button type="primary" htmlType="submit" className="login-button">
                  Login
                </Button>
              </Form.Item>
              <Divider style={{ margin: "10px 0" }}>or</Divider>
            </div>
          </Form>

          <div className="form-row">
            <Typography.Text>
              Don’t have an account? <a href="/signup">Sign Up</a>
            </Typography.Text>
          </div>
        </div>
      </Col>

      <Col xs={0} md={9} lg={9} xl={9} xxl={9} className="signin-image-section">
      <div className="image-container">
      <img src={signInImage} alt="Description" className="signin-image" />
      </div>
      </Col>
    </Row>
  );
};

export default SignIn;