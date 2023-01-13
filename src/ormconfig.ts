
import {DataSourceOptions} from 'typeorm'

export const conexao: DataSourceOptions = {
    type: 'mysql',
    username:'root',
    host:'localhost',
    database:'nestjs_test',
    password:'sirlei231',
    synchronize:true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'] 
}