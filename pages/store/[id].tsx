import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Detail({
  storeDetailData
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div>
      <p>{storeDetailData.name}</p>
    </div>
  );
}

export async function getServerSideProps(params: any) {
  const storeId = params.query.id;
  const storeDetailData = await (
    await fetch(`http://localhost:9000/stores/${storeId}`)
  ).json();

  return {
    props: { storeDetailData }
  };
}
