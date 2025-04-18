import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";

export default function DeleteProductPage() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/products?id=' + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  function back() {
    router.push("/products");
  }

 async function deleteProduct() {
    await axios.delete('/api/products?id='+id);
    back();
  }

  return (
    <Layout>
      <h1 className="text-center">Você quer deleter o produto "{productInfo?.title}"? </h1>
      <div className="flex gap-2 justify-center">      
      <button onClick={deleteProduct} className="btn-red">Sim</button>
      <button className="btn-default" onClick={back}>Não</button>
      </div>
    </Layout>
  );
}
