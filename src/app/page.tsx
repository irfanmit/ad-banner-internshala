'use client'

import React, { useState } from "react";
import EditBannerTemplateBs from "../../components/EditBannerComp";
import BannerImageComp from "../../components/BannerImageComp"; // Assuming you have this component
import adsData from "../../data/ads.json"; // Assuming you have this data
import { Container, Grid } from "@mui/material";

const Home: React.FC = () => {
  const [ads, setAds] = useState(adsData);
  const [editingAd, setEditingAd] = useState(null);

  const handleEdit = (ad) => {
    setEditingAd(ad);
  };

  const handleSave = (updatedAd) => {
    setAds(ads.map(ad => ad.id === updatedAd.id ? updatedAd : ad));
    setEditingAd(null);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {ads.map(ad => (
          <Grid item xs={12} sm={6} md={4} key={ad.id}>
            <BannerImageComp {...ad} onEdit={() => handleEdit(ad)} />
          </Grid>
        ))}
      </Grid>
      {editingAd && (
        <EditBannerTemplateBs
          image = {editingAd.image}
          open={Boolean(editingAd)}
          initialData={editingAd}
          onSave={handleSave}
          onClose={() => setEditingAd(null)}
        />
      )}
    </Container>
  );
};

export default Home;
