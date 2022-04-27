import React from "react";
import { Grid } from "../elements";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "",
    title: "일반 회원",
    width: "156px",
  },
  {
    url: "",
    title: "판매점회원",
    width: "156px",
  },
];

const ImageButtons = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: "148px",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", //overrides inline-style
    height: "50%",
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.65,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      borderBottom: "2px solid currentColor",
    },
  },
}));

// 버튼 이미지 scr
// const ImageSrc = styled("span")({
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: "cover",
//   backgroundPosition: "center 40%",
// });

// 버튼 이미지
const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#4069D9",
}));

// 마우스 오버
const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  fontSize: "16px",
  fontWeight: "500",
  border: "1.6px solid #10369E",
  backgroundColor: "#9CAFE3",
  opacity: 0.3,
  transition: theme.transitions.create("opacity"),
}));

const ImageCurverdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "#D4DEF2",
  opacity: 0,
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBases() {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map(image => (
        <ImageButtons
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <Grid flex>
            <Grid>
              {/* <ImageSrc style={{ backgroundImage: `url(${image.url})` }} /> */}
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <ImageCurverdrop classNmae="MuiImageCurverdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 2,
                    pt: 1,
                    pb: theme => `calc(${theme.spacing(0)})`,
                    mt: 10,
                  }}
                >
                  {image.title}
                </Typography>
              </Image>
            </Grid>
          </Grid>
        </ImageButtons>
      ))}
    </Box>
  );
}
