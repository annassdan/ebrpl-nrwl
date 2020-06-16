import { EntityRepository, Repository } from 'typeorm';
import { VisitorEntity } from './visitor.entity';

@EntityRepository(VisitorEntity)
export class VisitorRepo extends Repository<VisitorEntity>{

}
