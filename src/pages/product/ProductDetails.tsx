import { Grid, Typography, IconButton, Box, Stack, Container } from "@mui/material";
import { Share, SquareRounded } from "@mui/icons-material";
import { Image } from "@components/image/index";
import { useProductDetails } from "./productDetails.hook";
import { WebShare } from "@components/Container/index";
import { Circular } from "@components/loader/index";
const ProductDetails = () => {
  // Destructure variables and methods from the useProduct hook
  const {
    variables: { productdata, features, isSmScreen, selectImage, setSelectImage },
    // methods: { },
  } = useProductDetails();

  if (!productdata) {
    return <Circular />;
  }

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
      {/* Main Product Image */}
      <Box sx={{ width: isSmScreen ? "100%" : "30%", display: "grid", placeItems: "center", margin: "auto" }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center ", alignItems: "center", gap: 2, p: 2 }}>
          <Image src={selectImage} alt="image" style={{ width: isSmScreen ? "80%" : "100%", borderRadius: 5 }} />
          {/* <Box sx={{ width: "100%", height: "100%" }}> */}
          {/* <iframe src="https://cpssuthar202.sirv.com/Spins/w/w1.spin " height="100%" frameborder="0" allowfullscreen></iframe> */}
          {/* </Box> */}
        </Box>

        {/* Thumbnail Images */}
        {productdata?.images && productdata.images.length >= 2 && (
          // <Box sx={{ width: "100%", overflowX: "auto" }}>
          <Box sx={{ display: "flex", width: "fit-content", m: "auto", mt: 2 }}>
            {productdata?.images?.map((image, index) => (
              <Image key={index} src={image} alt="image" style={{ height: isSmScreen ? 100 : 150, margin: 5, borderRadius: 5 }} onClick={() => setSelectImage(image)} />
            ))}
          </Box>
          // </Box>
        )}
      </Box>
      {/* Product Title */}
      <Box sx={{ position: "relative" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {productdata?.title}
        </Typography>
        <Box sx={{ position: "absolute", display: "flex", flexDirection: "column", top: -2, right: 10 }}>
          <WebShare text={productdata?.title} url={`product_details?model_name=${productdata?.model_name}`}>
            <IconButton aria-label="share" size="small">
              <Share />
            </IconButton>
          </WebShare>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {/* Colors Section */}
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="subtitle2" sx={{ textTransform: "capitalize", fontWeight: 500 }}>
              Colors
            </Typography>
            <Stack direction="row" spacing={1} sx={{ width: "100%", overflowX: "auto" }}>
              {productdata?.available_colors.map((color, index) => (
                <Typography variant="body1" key={index} sx={{ px: 1, display: "flex", flexDirection: "row", justifyContent: "center" }}>
                  {color} <SquareRounded sx={{ color: color }} />
                </Typography>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Features Section */}
        {Object.entries(features).map(
          ([key, value]) =>
            value && (
              <Grid item xs={12} sm={6} key={key}>
                <Box>
                  <Typography variant="subtitle2" sx={{ textTransform: "capitalize", fontWeight: 500 }}>
                    {key.replace(/_/g, " ")}
                  </Typography>
                  <Typography variant="body1">{value}</Typography>
                </Box>
              </Grid>
            )
        )}
      </Grid>
      {/* Product Description */}
      {/* <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {productdata?.description && (
          <>
            <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
              Description
              <Typography variant="body1">{productdata?.description}</Typography>
            </Typography>
            <Divider />
          </>
        )}
      </Box> */}
      {/* features */}
      {/* {productdata?.key_features && (
        <>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
              Key Features
            </Typography>
            {productdata?.key_features.map((f, index) => (
              <Typography variant="body1" key={index} sx={{ my: 1 }}>
                - {f}
              </Typography>
            ))}
          </Box>
          <Divider />
        </>
      )} */}
      {/* {productdata?.safety_features && (
        <>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
              Safety Features
            </Typography>
            {productdata?.safety_features.map((f, index) => (
              <Typography variant="body1" key={index} sx={{ my: 1 }}>
                - {f}
              </Typography>
            ))}
          </Box>
          <Divider />
        </>
      )} */}
      {/* {productdata?.user_friendly_features && (
        <>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
              User Friendly Features
            </Typography>
            {productdata?.user_friendly_features.map((f, index) => (
              <Typography variant="body1" key={index} sx={{ my: 1 }}>
                - {f}
              </Typography>
            ))}
          </Box>
          <Divider />
        </>
      )} */}
      {/* {productdata?.suitable_for && (
        <>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
              Suitable For
            </Typography>
            {productdata?.suitable_for.map((f, index) => (
              <Typography variant="body1" key={index} sx={{ my: 1 }}>
                - {f}
              </Typography>
            ))}
          </Box>
          <Divider />
        </>
      )} */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>{productdata?.hero_images && productdata?.hero_images.map((i) => <Image key={i} src={i} alt="image" style={{}} />)}</Box>
    </Container>
  );
};

export default ProductDetails;
