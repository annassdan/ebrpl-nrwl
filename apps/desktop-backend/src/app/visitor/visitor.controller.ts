import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorEntity } from './visitor.entity';

@Controller('visitor')
export class VisitorController {

  constructor(private readonly VisitorService: VisitorService) {
  }

  @Get()
  getSaja(): string {
    return 'annas';
  }

  /**
   * API Endpoint untuk mengambil semua data dari tabel Visitor
   * Method: GET
   */
  @Get('gets')
  async findAll(): Promise<VisitorEntity[]> {
    return this.VisitorService.findAll();
  }

  /**
   * API Endpoint untuk mengambil sebuah data dari tabel Visitor
   * Method: GET
   * @param id - PrimaryKey (ID)
   */
  @Get('get/:id')
  findById(@Param('id') id: any): Promise<VisitorEntity> {
    return this.VisitorService.findById(id)
      .catch(() => { throw new NotFoundException('Data Tidak ditemukan') });
  }

  /**
   * API Endpoint untuk menyimpan sebuah data
   * Method: POST
   * @param e - Body request VisitorEntity
   */
  @Post('post')
  post(@Body() e: VisitorEntity) {
    return this.VisitorService.post(e);
  }

  /**
   * API Endpoint untuk menyimpan beberapa data
   * Method: POST
   * @param es - Body Request berupa List dari VisitorEntity
   */
  @Post('posts')
  postAll(@Body() es: VisitorEntity[]) {
    return this.VisitorService.postAll(es);
  }

  /**
   * API Endpoint untuk menghapus sebuah data berdasarkan id
   * Method: DELETE
   * @param id - PrimaryKey (ID)
   */
  @Delete('delete/:id')
  deleteById(@Param('id') id: any) {
    return this.VisitorService.deleteById(id);
  }

}
