export default function About() {
  return (
    <div>
      <p>
        Next.js는 React를 기반으로 한 정적-서버 사이드 렌더링 프레임워크로
        구성된 사이트 입니다.
      </p>
      <p>
        맛집 리스트를 보여주고 리스트 중 하나의 아이템을 선택하면 팝업으로 상세
        설명을 보여줍니다.
      </p>

      <style jsx>{`
        p {
          margin: 10px;
          border-radius: 0 15px 15px 0;
          border-left: inset;
          padding: 0.6em;
          background: #ebeef0;
        }
      `}</style>
    </div>
  );
}
