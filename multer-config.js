// multer-config.js
import multer from 'multer';

// Configure storage options
const storage = multer.memoryStorage(); // Memory storage (for small files). Use diskStorage for larger files.

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB file size limit
});

export default upload;
