import React from "react";
import Insta from "../../Resources/Icons/Insta.png";
import Typography from "@material-ui/core/Typography";

function Icon() {
  return (
    <div className="brandName">
      <img src={Insta} alt="Logo" />
      <p className="words">InfluenceGram</p>
    </div>
  );
}

export default Icon;

{
  /* <Typography className="words" variant="h6" color="inherit">
InfluenceGram
</Typography> */
}
