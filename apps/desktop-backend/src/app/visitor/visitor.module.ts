import { Module } from '@nestjs/common';
import { VisitorController } from './visitor.controller';
import { VisitorService } from './visitor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorEntity } from './visitor.entity';
import { VisitorRepo } from './visitor.repo';

@Module({
  imports: [
    TypeOrmModule.forFeature([VisitorRepo])
  ],
  controllers: [VisitorController],
  providers: [VisitorService]
})
export class VisitorModule {}
