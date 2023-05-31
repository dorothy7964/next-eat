import StoreDetail from "@/components/StoreDetail";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Detail({
  storeDetailData
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div>
      <img src={storeDetailData.image} />
      <StoreDetail storeData={storeDetailData} />

      <style jsx>{`
        div {
          margin: 20px 150px;
          padding: 20px;
        }
        img {
          display: flex;
          margin: 0 auto;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }: any) {
  const [title, id] = params || [];

  const storeDetailData = await (
    await fetch(`http://localhost:9000/stores/${id}`)
  ).json();

  return {
    props: { storeDetailData }
  };
}
