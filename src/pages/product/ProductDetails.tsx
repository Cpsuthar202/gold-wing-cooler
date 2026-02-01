import { Grid, Typography, IconButton, Box, Stack, Container, Card, Divider } from "@mui/material";
import { Share, SquareRounded } from "@mui/icons-material";
import { Image } from "@components/image/index";
import { useProductDetails } from "./productDetails.hook";
import { WebShare } from "@components/Container/index";
import { Circular } from "@components/loader/index";
import cooler_background from "../../../public/images/cooler_background_desktop.jpg";
const ProductDetails = () => {
  const {
    variables: { productdata, features, featureList, isSmScreen, selectImage, setSelectImage },
  } = useProductDetails();

  console.log(productdata?.hero_images);

  if (!productdata) return <Circular />;

  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      {/* IMAGE SECTION */}
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
          px: 3,
          borderRadius: 3,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${cooler_background})`,
        }}
      >
        <Image
          src={selectImage}
          alt="cooler"
          style={{
            // height: 500,
            padding: "10px",
            // maxHeight: isSmScreen ? 240 : 320,
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Card>

      {/* THUMBNAILS */}
      {productdata?.images?.length > 1 && (
        <Stack direction="row" spacing={1} justifyContent="center" m={2}>
          {productdata.images.map((img, i) => (
            <Box
              key={i}
              onClick={() => setSelectImage(img)}
              sx={{
                border: selectImage === img ? "2px solid #1976d2" : "1px solid #ddd",
                borderRadius: 1,
                p: 0.5,
                cursor: "pointer",
              }}
            >
              <Image src={img} alt="thumb" style={{ height: 100 }} />
            </Box>
          ))}
        </Stack>
      )}

      {/* PRODUCT INFO CARD */}
      <Card sx={{ borderRadius: 3, p: 2, backgroundColor: "white" }}>
        {/* TITLE + SHARE */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {productdata.title}
          </Typography>

          <WebShare text={productdata.title} url={`product_details?model_name=${productdata.model_name}`}>
            <IconButton size="small">
              <Share />
            </IconButton>
          </WebShare>
        </Box>

        {/* COLORS */}
        <Box mt={1}>
          <Typography variant="body2" color="text.secondary">
            Colors:
          </Typography>
          <Stack direction="row" spacing={1} mt={0.5}>
            {productdata.available_colors.map((color, index) => (
              <Stack key={index} direction="row" alignItems="center" spacing={0.5}>
                <SquareRounded sx={{ color }} />
                <Typography variant="body2">{color}</Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* SPECS */}
        <Grid container spacing={2}>
          {featureList.map(
            (item, index) =>
              item.value && (
                <Grid item xs={12} sm={12} key={index}>
                  <Typography fontWeight={600}>{item.value}</Typography>
                  <Typography variant="caption">{item.label}</Typography>
                </Grid>
              ),
          )}
        </Grid>
      </Card>
      <Box mt={3}></Box>
      {/* HERO IMAGES */}
      {productdata?.hero_images?.length > 0 && (
        <Box mt={3}>
          {productdata.hero_images.map((img) => (
            <Image key={img} src={img} alt="hero" style={{ width: "100%", marginBottom: 12 }} />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default ProductDetails;

{
  /* Product Description */
}
{
  /* <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {productdata?.description && (
          <>
            <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
              Description
              <Typography variant="body1">{productdata?.description}</Typography>
            </Typography>
            <Divider />
          </>
        )}
      </Box> */
}
{
  /* features */
}
{
  /* {productdata?.key_features && (
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
      )} */
}
{
  /* {productdata?.safety_features && (
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
      )} */
}
{
  /* {productdata?.user_friendly_features && (
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
      )} */
}
{
  /* {productdata?.suitable_for && (
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
      )} */
}
