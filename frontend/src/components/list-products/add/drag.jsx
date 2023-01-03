import React, { Component } from "react";
// import "./drag.css";
import Uploader from "./Components/Uploader";
import Preview from "./Components/Preview";
import { DragStyle } from "./drag.style";
import Grid from "@mui/material/Grid";

class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesPreviewUrls: [],
    };
  }

  imagesPreviewUrls = (result) => {
    this.setState({
      imagesPreviewUrls: [...this.state.imagesPreviewUrls, result],
    });
  };

  deleteImage = (id) => {
    const { imagesPreviewUrls } = this.state;
    if (imagesPreviewUrls.length > 0) {
      const filterImages = imagesPreviewUrls.filter((image) => image.id !== id);
      this.setState({
        imagesPreviewUrls: filterImages,
      });
    }
  };

  render() {
    const { imagesPreviewUrls } = this.state;
    // console.log(imagesPreviewUrls);
    return (
      <DragStyle>
        <Grid container>
          <Grid className="relati" item xs={12}>
            <Uploader imagesPreviewUrls={this.imagesPreviewUrls} />
          </Grid>

          <Grid className="relati" item xs={12}>
            {imagesPreviewUrls.length > 0 ? (
              <Preview imagesPreviewUrls={imagesPreviewUrls} deleteImage={this.deleteImage} />
            ) : null}
          </Grid>
        </Grid>
      </DragStyle>
    );
  }
}

export default Drag;
