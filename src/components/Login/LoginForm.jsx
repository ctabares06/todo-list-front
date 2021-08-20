import React, { useState } from "react";
import styled from "styled-components";

const Login = styled.div`
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const LoginForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleUsername = ({ target:{ value } }) => setForm({ ...form, username: value });
  const handlePassword = ({ target: { value } }) => setForm({ ...form, password: value });

  return (
    <Login>
      <form>
        <div>
          <label htmlFor="name">Username or Email</label>
          <input onChange={handleUsername} type="text" name="user" value={form.username} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input onChange={handlePassword} type="password" name="password" value={form.password} />
        </div>
        <div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </Login>
  );
};

export default LoginForm;
