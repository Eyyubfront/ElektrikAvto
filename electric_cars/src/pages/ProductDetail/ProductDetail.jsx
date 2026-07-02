import React from "react";
import PageContainer from "../../layout/PageContainer/PageContainer";
import { useParams } from "react-router-dom";
import announcement from "../../data/announcement.json";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import HeadTittle from "../../components/HeadTittle/HeadTittle";
import ProductDetailCard from "../../components/ProductCard/ProductDetailCard/ProductDetailCard";

const ProductDetail = () => {
 

  return (
    <PageContainer>
      <HeadTittle
        title="Elan haqqında ətraflı məlumat"
        Subtitle="Elanla bağlı bütün məlumatları, məhsulun vəziyyətini və əlaqə məlumatlarını burada tapa bilərsiniz."
      />
          <Breadcrumb currentLabel="Elan" currentTo="/announcement" />

  <ProductDetailCard />

    </PageContainer>
  );
};

export default ProductDetail;
