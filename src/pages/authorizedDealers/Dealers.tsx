import { useState, useMemo } from "react";
import { Box, Card, CardContent, Typography, Grid, Button, Stack, TextField, Container } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import dealerList from "@/data/dealers.json";
import { mColor } from "@color";

const Dealers = () => {
  const [search, setSearch] = useState("");

  // 🔴 LIVE FILTER (runs automatically on typing)
  const filteredDealers = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) return dealerList;

    return dealerList.filter((dealer) =>
      [
        dealer.shopName,
        dealer.ownerName,
        dealer.address,
        dealer.city,
        dealer.state,
        dealer.pincode, // ✅ pincode added
      ]
        .filter(Boolean) // remove undefined/null
        .join(" ")
        .toLowerCase()
        .includes(keyword),
    );
  }, [search, dealerList]);

  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      {/* ===== Header ===== */}
      <Box textAlign="center">
        <Typography variant="h5" fontWeight={700} color={mColor.primaryMain}>
          Authorized Dealers
        </Typography>
        <Typography color={mColor.successDark}>Find Gold Wing Cooler dealers near you</Typography>
      </Box>

      {/* ===== LIVE SEARCH INPUT ===== */}
      <Box my={2} textAlign="center">
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          size="small"
          // placeholder="Search by shop, city or state"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: "100%",
            maxWidth: 500,
          }}
        />
      </Box>

      {/* ===== Dealer Cards ===== */}
      <Grid container spacing={2}>
        {filteredDealers.length > 0 ? (
          filteredDealers.map((dealer, index) => (
            <Grid item xs={12} md={6} key={`${dealer.id}-${index}`}>
              <Card
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  backgroundColor: "#ffffff",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={700} color={mColor.primaryMain}>
                    {dealer.shopName}
                  </Typography>

                  <Typography variant="body1" mb={1}>
                    Owner: {dealer.ownerName}
                  </Typography>

                  <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <LocationOnOutlinedIcon fontSize="small" />
                    <Typography variant="body1">
                      {dealer.address}, {dealer.city}, {dealer.state}
                      {dealer?.pincode ? ` - ${dealer.pincode}` : ""}
                    </Typography>
                  </Stack>

                  {dealer.phone && (
                    <Button variant="contained" size="small" startIcon={<PhoneOutlinedIcon />} href={`tel:${dealer.phone}`} sx={{ mt: 1, borderRadius: 2, textTransform: "none" }}>
                      Call Dealer
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          // ✅ ONLY show when search is NOT empty
          <Grid item xs={12}>
            <Typography textAlign="center">No dealers found</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Dealers;
