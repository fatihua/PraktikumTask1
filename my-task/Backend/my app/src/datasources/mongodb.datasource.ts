// src/datasources/mongodb.datasource.ts
import {juggler} from '@loopback/repository';

export class MongoDBDataSource extends juggler.DataSource {
  static dataSourceName = 'MongoDB';

  constructor(
    dsConfig: object = {
      name: 'MongoDB',
      connector: 'mongodb',
      url: 'mongodb://localhost:27017/your_database_name',  // MongoDB URL'nizi buraya yazın
    },
  ) {
    super(dsConfig);
  }
}
