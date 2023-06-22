import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from './book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  //CRUD
  @Post()
  async create(@Body() data: BookDTO) {
    return this.bookService.create(data)
  }

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }
  @Get(':id')
  async findById(@Param("id") id: string) {
    return this.bookService.findById(id)
  }
  //o id do livro a ser alterado passará pela rota
  @Put(':id') 
  async update(@Param("id") id: string, @Body() data: BookDTO) {
    return this.bookService.update(id, data)
  }

  @Delete(':id')
  async delete(@Param("id") id: string) {
    return this.bookService.delete(id)
  }
}