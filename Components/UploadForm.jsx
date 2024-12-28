// components/UploadForm.js
import { useState } from 'react';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert('Please select a file');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setMessage(data.message);
      } else {
        const error = await res.json();
        setMessage(error.error);
      }
    } catch (error) {
      setMessage('Error uploading file');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
      {message && <p>{message}</p>}
    </form>
  );
}
