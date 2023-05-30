import Modal from "@/components/Modal";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Store({
  stores
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const onClick = (id: string, name: string) => {
    // router.push(`/store/${name}/${id}`);
    setModalOpen(true);
  };

  console.log("📢 [store.tsx:13]", stores);

  return (
    <div className="container">
      {stores?.map((store: any) => (
        <div
          onClick={() => onClick(store.id, store.name)}
          className="store"
          key={store.id}
        >
          <img src={`${store.thumb}`} />
        </div>
      ))}

      <Modal open={modalOpen} setModalOpen={setModalOpen} />

      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: repeat(4 100px);
          grid-template-columns: repeat(4, 200px);
          gap: 10px;
          align-content: center;
          justify-content: center;
        }
        .store {
          cursor: pointer;
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
