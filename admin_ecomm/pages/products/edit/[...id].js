import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";




export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);
  return (
    <Layout>
      <h1>Editar Produto</h1>
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
}
