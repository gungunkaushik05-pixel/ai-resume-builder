function CertificatesForm({ certifications, setCertifications }) {
  const handleChange = (index, value) => {
    const updated = [...certifications];
    updated[index] = value;
    setCertifications(updated);
  };

  const addCertificate = () => {
    setCertifications([...certifications, ""]);
  };

  const removeCertificate = (index) => {
    const updated = certifications.filter((_, i) => i !== index);
    setCertifications(updated);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Certificates</h2>

      {certifications.map((certificate, index) => (
        <div key={index} className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Certificate Name"
            value={certificate}
            onChange={(e) => handleChange(index, e.target.value)}
            className="flex-1 border p-3 rounded-lg"
          />

          <button
            onClick={() => removeCertificate(index)}
            className="bg-red-500 text-white px-3 rounded-lg"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        onClick={addCertificate}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        + Add Certificate
      </button>
    </div>
  );
}

export default CertificatesForm;