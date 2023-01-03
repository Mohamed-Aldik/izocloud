import { useState } from "react";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import UploadIcon from "@mui/icons-material/Upload";
import FocusTrap from "@mui/base/FocusTrap";

const Step1 = () => {
  const [open, setOpen] = useState(false);
  return (
    <Grid container my={3} spacing={3}>
      <Grid item xs={4}>
        <TextField fullWidth id="outlined-basic" label="Product Name*" variant="outlined" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth id="outlined-basic" label="SKU" variant="outlined" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth id="outlined-basic" label="SKU2" variant="outlined" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth id="outlined-basic" label="Barcode Type*" variant="outlined" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth id="outlined-basic" label="Unit*" variant="outlined" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth id="outlined-basic" label="Brand" variant="outlined" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth id="outlined-basic" label="Category*" variant="outlined" />
      </Grid>
      <Grid item xs={4}>
        <TextField fullWidth id="outlined-basic" label="Sub category*" variant="outlined" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button startIcon={<UploadIcon />} variant="contained" component="label">
            Upload Brochure
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button startIcon={<UploadIcon />} variant="contained" component="label">
            Upload Image
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <FocusTrap open={open} disableRestoreFocus disableAutoFocus>
          <Stack alignItems="start" spacing={2}>
            <FormControlLabel
              control={<Checkbox onChange={(e) => setOpen(e.target.checked)} checked={open} />}
              label=" Manage Stock?"
            />
            {open && (
              <TextField fullWidth id="outlined-basic" label="Alert quantity" variant="outlined" />
            )}
          </Stack>
        </FocusTrap>
      </Grid>
      <Grid item xs={12}>
        <Editor
          apiKey="yhjpmayu9w0h8hwguh8bl3yulqv59o4f45fwixzegb5lxng6"
          initialValue="<p>Product Description:</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Step1;
