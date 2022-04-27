import React, { useState } from "react";
import Link from "next/Link";
import styles from "../styles/Home.module.css";
import {
  Container,
  Grid,
  Button,
  Buttons,
  Input,
  Text,
  Image,
} from "../elements";
import Checkbox from "@mui/material/Checkbox";

export default function Login(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const loginInfo = {
  //   email: email,
  //   password: password,
  // };

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
          <Grid width="314px" margin="0 auto">
            <Grid width="100%">
              <Grid>
                <Text
                  textalign="center"
                  size="28px"
                  bold="900"
                  margin="35px auto 30px auto"
                  padding="5px"
                >
                  로그인
                </Text>
              </Grid>
              <Grid margin="0 0 15px 0">
                <Text size="12px" bold="500" height="19px" color="#BBBBBB">
                  아이디
                </Text>
                <Input
                  width="312px"
                  height="49px"
                  placeholder="Admin"
                  // value={setEmail}
                />
              </Grid>
              <Grid margin="15px 0 4.5px 0">
                <Text size="12px" bold="500" height="19px" color="#BBBBBB">
                  비밀번호
                </Text>
                <Input
                  width="312px"
                  height="49px"
                  placeholder="Password"
                  type="password"
                />
              </Grid>
            </Grid>
            <Grid margin="4.5px 0 15px 0">
              <Grid flexCenter>
                <Grid flexEvenly>
                  <Checkbox paddint="0 2px 0 0" />
                  <Text size="13px">로그인 상태 유지</Text>
                </Grid>
                <div className={styles.searchId}>
                  <Link font-size="13px" font-color="#4069d9" href="/">
                    아이디/비밀번호 찾기
                  </Link>
                </div>
              </Grid>
              <Grid margin="25px auto">
                <Buttons signup>로그인</Buttons>
              </Grid>
            </Grid>
            <Grid flexEvenly width="250px" margin="0 auto">
              <Text size="14px" color="#333333">
                아직 회원이 아니신가요?
              </Text>
              <div className={styles.signup}>
                <Link size="10px" font-color="#4069d9" href="/signup">
                  회원가입
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
