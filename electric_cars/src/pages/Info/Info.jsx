import React from "react";
import PageContainer from "../../layout/PageContainer/PageContainer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import HeadTittle from "../../components/HeadTittle/HeadTittle";
import InfoCard from "../../components/InfoCard/InfoCard";

const Info = () => {
  return (
    <PageContainer>
      <HeadTittle
        title="Məlumatlar"
        Subtitle="Elektrik avtomobilləri haqqında ətraflı məlumatlar və təlimatlar."
      />
      <Breadcrumb currentLabel="Məlumat" currentTo="/info" />
      <InfoCard />
    </PageContainer>
  );
};

export default Info;
