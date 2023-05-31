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
        .img {
          width: 80%;
          background-color: red;
        }
        div {
          padding: 30px 100px;
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
