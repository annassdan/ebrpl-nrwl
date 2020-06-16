import { Injectable } from '@nestjs/common';
import { VisitorEntity } from './visitor.entity';
import { VisitorRepo } from './visitor.repo';
import { DeleteResult, FindManyOptions } from 'typeorm';

@Injectable()
export class VisitorService {

  /* Inject Repository Visitor */
  constructor(private readonly VisitorRepo: VisitorRepo) {
  }

  /**
   * Save sebuah data berdasarkan entity
   * @param e - Entity
   */
  post(e: VisitorEntity): Promise<VisitorEntity> {
    return this.VisitorRepo.save(e);
  }

  /**
   * Save beberapa data dari
   * @param es - List Entity
   */
  postAll(es: VisitorEntity[]): Promise<VisitorEntity[]> {
    return this.VisitorRepo.save(es);
  }

  /**
   * Hapus sebuah data berdasarkan id
   * @param pk - PrimaryKey (ID)
   */
  deleteById(pk: number): Promise<DeleteResult> {
    return this.VisitorRepo.delete(pk);
  }

  /**
   * Ambil sebuah databerdataskan id
   * @param pk - PrimaryKey (ID)
   */
  findById(pk: number): Promise<VisitorEntity | undefined> {
    return this.VisitorRepo.findOne(pk);
  }

  /**
   * Ambil seluruh data dari tabel Visitor
   * @param options - Options `Dokumentasi lengkapnya lihat di https://typeorm.io/`
   */
  findAll(options?: FindManyOptions<VisitorEntity>): Promise<VisitorEntity[]> {
    return this.VisitorRepo.find(options ? { order: { createdAt: 'DESC' } } : { order: { createdAt: 'DESC' }, ...options })
  }

}
