import React from "react";

import { connect } from "react-redux";

import { Typography, Divider, TextField } from "@material-ui/core";

import { withLayout } from "src/components/layout/withLayout";
import Button from "src/components/ui/Button";
import { AppState } from "src/types/appState";
import { login } from "src/redux/ducks/auth";
import { User } from "src/types/user";
import { navigate } from "@reach/router";

interface Props {
  user?: User;
  login: (userLogin: string) => Promise<void>;
}

interface State {
  login?: string;
  password?: string;
}

class Login extends React.Component<Props, State> {
  state: State = {};

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await this.props.login(this.state.login || "");
    navigate("/");
  };

  handleChange = (key: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      this.setState({ [key]: e.target.value });
  };

  render() {
    return (
      <>
        <Typography align="center" variant="h5" component="h3">
          Вход
        </Typography>
        <Divider style={{ marginTop: 10 }} />
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            id="standard-name"
            label="Логин"
            value={this.state.login}
            onChange={this.handleChange("login")}
            margin="normal"
          />
          <TextField
            fullWidth
            id="standard-name"
            label="Пароль"
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            margin="normal"
          />
          <footer style={{ marginTop: 16 }}>
            <Button type="submit" color="primary" label="Войти" />
          </footer>
        </form>
      </>
    );
  }
}

export default withLayout("Auth")(
  connect(
    (state: AppState) => ({
      user: state.auth.user
    }),
    {
      login
    }
  )(Login)
);
