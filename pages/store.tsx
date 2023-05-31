import Modal from "@/components/Modal";
import { IStoresAPI } from "@/types/stores";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";

export default function Store({
  stores
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const [modalOpen, setModalOpen] = useState(false);
  const [storeData, setStoreData] = useState({});

  const onClick = (store: any) => {
    setModalOpen(true);
    setStoreData(store);
  };

  return (
    <div className="container">
      {stores?.map((store: any) => (
        <div onClick={() => onClick(store)} className="store" key={store.id}>
          <img src={store.thumb} />
        </div>
      ))}

      <Modal
        open={modalOpen}
        storeData={storeData as IStoresAPI}
        setModalOpen={setModalOpen}
      />

      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: repeat(4 100px);
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          align-content: center;
          justify-content: center;
          padding: 0 40px;
        }
        .store {
          cursor: pointer;
          display: flex;
          justify-content: center;
        }
        .store img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .store:hover img {
          transform: scale(1.05) translateY(-10px);
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const stores = await (await fetch(`http://localhost:9000/stores`)).json();

  return {
    props: {
      stores
    }
  };
}
