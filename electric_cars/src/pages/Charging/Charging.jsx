import React from "react";
import PageContainer from "../../layout/PageContainer/PageContainer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import HeadTittle from "../../components/HeadTittle/HeadTittle";
import ChargingCard from "../../components/ChargingCard/ChargingCard";
import ChargingVideoHead from "../../components/ChargingCard/ChargingVideoHead/ChargingVideoHead";
const Charging = () => {
  return (
    <PageContainer>
      <HeadTittle
        title="⚡Şarj məntəqələri"
        Subtitle="Elektrik avtomobilləri üçün şarj məntəqələrinin siyahısı və yerləşdiyi yerlər."
      />
      <Breadcrumb currentLabel="Şarj məntəqələri" currentTo="/charging" />
      <ChargingVideoHead />
      <ChargingCard />
    </PageContainer>
  );
};

export default Charging;
