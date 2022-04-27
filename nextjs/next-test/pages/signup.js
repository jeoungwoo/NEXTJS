import React from "react";
import { useRouter } from "next/router";

import {
  Container,
  Grid,
  Button,
  Buttons,
  ImageButtons,
  Input,
  Text,
  Image,
} from "../elements";

export default function SignUp(props) {
  const router = useRouter();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const signupInfo = {
  //   email: email,
  //   password: password,
  // }

  return (
    <React.Fragment>
      <Container width="100%" mainFlex bg="#E5E5E5">
        <Grid
          width="880px"
          height="724px"
          margin="141px auto auto auto"
          bg="#ffffff"
        >
          <Grid flexColumnEnd width="826px" height="128px" margin="0 31px 0 0">
            <Text size="22px" bold="700">
              All about Sportstoto
            </Text>
            <Text size="26px" bold="700">
              Brand New PicksBee
            </Text>
          </Grid>
          <Grid width="360px" margin="0 auto">
            <Grid width="100%">
              <Grid>
                <Text
                  textalign="center"
                  size="28px"
                  bold="900"
                  margin="35px auto 19px auto"
                  padding="5px"
                >
                  회원가입
                </Text>
                <Text
                  textalign="center"
                  size="14px"
                  bold="300"
                  color="#717171"
                  margin="1px auto 19px auto"
                  padding="3px"
                >
                  회원가입을 통해 더 많은 서비스를 경험해보세요.
                </Text>
              </Grid>
              <Grid width="312px" height="148px" margin="15px auto">
                <ImageButtons />
              </Grid>
            </Grid>
            <Grid flexEvenly width="100%" margin="25px 0">
              <Buttons
                signup
                _onClick={() => {
                  router.push("/login");
                }}
              >
                회원가입
              </Buttons>
            </Grid>
            <Grid flexColumnCenter padding="5px" margin="10px auto">
              <Grid flexCenter margin="16px 0">
                <Grid width="109px" height="1px" border="1px solid #BBBBBB" />
                <Text color="#717171" padding="0 8px">
                  간편 회원가입
                </Text>
                <Grid width="109px" height="1px" border="1px solid #BBBBBB" />
              </Grid>
              <Grid margin="7px 0 4px 0">카카오 로그인</Grid>
              <Grid margin="4px 0">네이버 로그인</Grid>
              <Grid margin="4px 0">페이코 로그인</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
