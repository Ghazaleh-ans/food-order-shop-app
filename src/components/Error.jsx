export default function Error({ tittle, message }) {
  return (
    <div className="error">
      <h2>{tittle}</h2>
      <p>{message}</p>
    </div>
  );
}
