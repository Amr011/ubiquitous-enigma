import 'reflect-metadata'

import dotenv from 'dotenv'
dotenv.config()

import { DataSource } from 'typeorm'
import { __prod__, dbConfig, __dev__ } from '../utils/constants'

import { user } from '../entity/user'
import { project } from '../entity/project'

export default async function connectDatabase() {
   let myDataSource = new DataSource({
      type: 'postgres',
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      entities: [user, project],
      migrations: ['src/migration/**/*.ts', 'dist/migration/**/*.js'],
      subscribers: ['src/subscriber/**/*.ts', 'dist/subscriber/**/*.js'],

      synchronize: true,
      dropSchema: !__prod__,
      logging: !__prod__,
   })
   myDataSource.initialize()
}
