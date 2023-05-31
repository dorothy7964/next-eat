export default function Footer() {
  return (
    <footer>
      <p>&copy;2020 wooami</p>

      <style jsx>{`
        footer {
          display: flex;
          justify-content: end;
          align-items: end;
          background-color: #ddd;
          height: 75px;
          padding: 10px;
        }
        p {
          color: #868e96;
          font-size: 12px;
        }
      `}</style>
    </footer>
  );
}
