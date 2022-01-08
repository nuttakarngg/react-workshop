export default function TextInput({ label, onChange, value }) {
  return (
    <div className="form-group my-2">
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control"
        placeholder={`Enter ${label}`}
      />
    </div>
  );
}
