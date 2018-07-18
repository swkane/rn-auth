import React from "react";
import { View } from "react-native";
import { Card, Button, CardSection } from "./common";

class LoginForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />
        <CardSection>
          <Button>Text</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
