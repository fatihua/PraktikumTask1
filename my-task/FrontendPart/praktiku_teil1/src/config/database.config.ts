// config/database.config.ts
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/your_database_name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB bağlantısı başarılı');
  } catch (error) {
    console.error('MongoDB bağlantısı başarısız:', error);
    process.exit(1);  // Bağlantı hatası olduğunda uygulamayı durdur
  }
};

export default connectDB;
