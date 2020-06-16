import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import { VisitorModule } from './visitor/visitor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      name: 'default',
      database: 'dsk.sqlite',
      synchronize: true,
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
    }),
    VisitorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
