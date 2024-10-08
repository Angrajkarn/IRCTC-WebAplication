import React, { useState } from 'react';
import './Signup.scss';
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';
import { Form, Input, Button } from 'antd';  // Assuming you're using Ant Design


const Signup = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Handle success
      console.log('Signup successful:', values);
    } catch (error) {
      // Handle error
      console.error('Signup failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-description">
          <h2>Welcome to Our Platform</h2>
          <p>
            Discover the best features, advanced UI, and a seamless booking experience. 
            Our platform is designed to make your train booking experience simple, 
            efficient, and enjoyable. Join us today and start your journey with ease!
          </p>
        </div>

        <div className="signup-form">
          <h1>Create Your Account</h1>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="form"
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: 'Please enter your username!' }]}
            >
              <Input
                prefix={<FaUser className="input-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter your email!', type: 'email' }]}
            >
              <Input
                prefix={<FaEnvelope className="input-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password
                prefix={<FaLock className="input-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: 'Please enter your phone number!' }]}
            >
              <Input
                prefix={<FaPhone className="input-icon" />}
                placeholder="Phone Number"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="submit-button"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
