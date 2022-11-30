import React from "react";
import { Card, Form, Input, Button } from "antd";
import { authenticateUser } from "./loginSlice";
import { useAppDispatch } from "../../hooks";
import { isAuthenticated } from "../../services/authenticationService";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export function LoginPage() {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  if (isAuthenticated()) {
    navigate.push("/v1");
  }

  const onFinish = (values) => {
    dispatch(authenticateUser(values));
  };

  return (
    <Card hoverable={true} title="Authentication" className={styles.login_card}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
