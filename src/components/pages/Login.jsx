import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.scss';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Handle success (e.g., navigate to dashboard or show a success message)
      console.log('Login successful:', values);
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-info">
          <h2>Welcome Back!</h2>
          <p>Login to your account and continue booking your train tickets with ease. If you're new here, feel free to sign up and enjoy our seamless services.</p>
        </div>
        <div className="login-form">
          <h1>Login</h1>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleLogin}
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
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password
                prefix={<FaLock className="input-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="login-button"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <div className="login-options">
            <Link to="/Forget" className="forgot-password">
              Forgot Password?
            </Link>
            <p>
              New User?{' '}
              <Link to="/signup" className="signup-link">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
