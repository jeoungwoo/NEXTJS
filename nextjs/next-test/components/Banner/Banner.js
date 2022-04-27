import React from "react";
import { Grid, Text, Image } from "../../elements";
import BannerRectangle from "../../assets/BannerRectangle.pdf";

const Banner = props => {
  return (
    <React.Fragment>
      <Grid>
        <Image shape="rectangle" src={BannerRectangle} />
        <Grid flexColumnEnd width="826px" height="128px" margin="0 31px 0 0">
          <Text size="22px" bold="700">
            All about Sportstoto
          </Text>
          <Text size="26px" bold="700">
            Brand New PicksBee
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Banner;
