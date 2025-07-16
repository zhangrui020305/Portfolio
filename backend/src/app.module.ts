import { ContactModule } from './contact/contact.module';
import { TittleModule } from './tittle/tittle.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBcontent } from './tittle/title.entity';
import { DBContact } from './contact/contact.entity';

@Module({
  imports: [
    ContactModule,
    TittleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'Portfolio',
      entities: [DBcontent, DBContact],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
