import { Container, Grid } from "@mui/material";

import { ProductCard } from "@components/card/index";
import { Image } from "@components/image/index";
import { useHome } from "./Home.hook";
import { Circular } from "@components/loader/index";
import hone_poster from "../../../public/images/home_poster.png";
const Home = () => {
  const {
    variable: { productslist },
    // methods: {},
  } = useHome();

  if (!productslist) {
    return <Circular />;
  }

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2, px: 0 }}>
      <Image src={hone_poster} alt="hero" sx={{ borderRadius: 2 }} />
      <Grid container>
        {productslist &&
          productslist?.map((p, index) => (
            <Grid item key={index} lg={3} md={4} sm={6} xs={6} sx={{ p: 1 }}>
              <ProductCard data={p} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
