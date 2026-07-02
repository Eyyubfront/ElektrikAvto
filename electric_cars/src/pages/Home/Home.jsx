import React from "react";
import PageContainer from "../../layout/PageContainer/PageContainer";
import ElectricInfo from "../../components/ElectricInfo/ElectricInfo";
import Question from "../../components/Question/Question";
import HomeBottomVideo from "../../components/HomeCards/HomeBottomVideo/HomeBottomVideo";
import HomeAnnouncement from "../../components/HomeCards/HomeAnnouncement/HomeAnnouncement";
import HomeCards from "../../components/HomeCards/HomeCards";

const Home = () => {
  return (
    <PageContainer>
      <HomeCards />
      <HomeAnnouncement />
      <ElectricInfo />
      <HomeBottomVideo />
      <Question />
    </PageContainer>
  );
};

export default Home;
