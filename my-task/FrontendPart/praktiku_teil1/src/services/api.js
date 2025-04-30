import axios from 'axios';

// Axios örneği oluşturuyoruz
const api = axios.create({
  baseURL: 'http://localhost:3000',  // API'nizin base URL'sini burada belirtin
  headers: {
    'Content-Type': 'application/json',
  }
});

// Token'ı almak ve eklemek için bir fonksiyon
const getToken = () => {
  return localStorage.getItem('token');
};

// Korunan API'ye istek göndermek için bir fonksiyon
const getProtectedData = async () => {
  const token = getToken(); // LocalStorage'dan token'ı al

  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await api.get('/protected', {
      headers: {
        Authorization: `Bearer ${token}`,  // JWT token'ı Authorization header'ına ekliyoruz
      },
    });
    return response.data;  // API'den gelen veriyi döndürüyoruz
  } catch (error) {
    console.error('Error fetching protected data:', error);
    throw error;
  }
};

// Diğer API işlemleri için fonksiyonlar ekleyebilirsiniz
export { getProtectedData };
