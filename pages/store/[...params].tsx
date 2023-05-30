export default function Detail({ params }: any) {
  const [name, id] = params || [];
  console.log("📢 [[...params].tsx:3]", params);
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params
    }
  };
}
