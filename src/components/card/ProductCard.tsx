import React from "react";
import { Typography, Box, IconButton, Button } from "@mui/material";
// import { trimTextToWordLimit } from "../utils/textUtils";
import { useNavigate } from "react-router-dom";
import { Share } from "@mui/icons-material";
// import { WebShare } from "../Container/index";
// import { Image } from "../image/index";
import { IProduct } from "@/localdatatype/product";
import { WebShare } from "@components/Container/index";
// import { Iproduct } from "@/store/reducers/product/type";
// import { useProductDetails } from "@/pages/product/productDetails.hook";
import cooler_background from "../../../public/images/cooler_background_desktop.jpg";

interface IProductCard {
  data: IProduct;
  // bastSellingNo?: boolean;
}

export const ProductCard: React.FC<IProductCard> = ({ data }) => {
  const navigate = useNavigate();
  // const {
  //   variables: {},
  //   methods: {},
  // } = useProductDetails();

  return (
    <>
      <Box
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          border: "1px solid #e0e0e0",
          bgcolor: "#fff",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            p: 1,
            // border: 1,
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
            // height: 200,
            // backgroundImage: `url("/images/cooler_background_desktop.jpg")`,
            backgroundImage: `url(${cooler_background})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={data?.images?.[0]}
            alt={data?.title}
            style={{
              width: "100%",
              // height: 250,
              objectFit: "contain",
            }}
          />
        </Box>

        <Box sx={{ position: "absolute", display: "flex", flexDirection: "column", top: 10, right: 10 }}>
          <WebShare text={data?.title} url={`product_details?model_name=${data?.model_name}`}>
            <IconButton aria-label="share" size="small">
              <Share />
            </IconButton>
          </WebShare>
        </Box>

        {/* Content */}
        <Box
          sx={{
            px: 2,
            pb: 2,
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600, my: 1 }}>
            {data?.title}
          </Typography>

          {/* <Typography variant="body2" sx={{ color: "success.main", mt: 0.5 }}>
            ✔ Heavy Duty
          </Typography> */}

          {/* Button at Bottom */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: "auto", // 🔥 Push button to bottom
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
            onClick={() => navigate(`/product_details?model_name=${data?.model_name}`)}
          >
            View Details
          </Button>
        </Box>
      </Box>
    </>
  );
};

//  <Box
//         sx={{
//           borderRadius: 2,
//           overflow: "hidden",
//           height: "100%",
//           width: "100%",
//         }}
//       >
//         <Box sx={{ position: "relative", p: 1 }}>
//           {/* Product Image */}
//           <Image src={data?.images[0]} alt={data?.title} style={{ width: "100%", height: "200px", borderRadius: 2 }} onClick={() => navigate(`/product_details?model_name=${data?.model_name}`)} />
//           {/* Favorite and Share Icons */}
//           <Box sx={{ position: "absolute", display: "flex", flexDirection: "column", top: 10, right: 10 }}>
//             <WebShare text={data?.title} url={`product_details?model_name=${data?.model_name}`}>
//               <IconButton aria-label="share" size="small">
//                 <Share />
//               </IconButton>
//             </WebShare>
//           </Box>
//           {/* Product Details */}
//           <Box sx={{ px: 2, py: 1, bgcolor: "secondary.main", height: "100%", cursor: "pointer", borderRadius: 1 }} onClick={() => navigate(`/product_details?model_name=${data?.model_name}`)}>
//             {/* Title */}
//             <Typography variant="subtitle2" sx={{ fontWeight: 500, textAlign: "center" }}>
//               {trimTextToWordLimit(data?.title, 40)}
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
