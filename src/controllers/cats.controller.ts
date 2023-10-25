import { Controller, Get, Post, Body } from '@nestjs/common';
// import { Request, Response } from 'express';
import { Cat } from '../interface/cats.interface';
import { CreateCatDto } from '../dto/create-cat-dto';
import { CatsService } from 'src/services/cats.service';

//akan membuat default route menjadi cats
@Controller('cats')
// export class CatsController {
//   @Get()
//   findAll(@Req() request: Request, @Res() res: Response) {
//     res.status(HttpStatus.OK).json([
//       {
//         name: 'cat 1',
//         age: 1,
//       },
//     ]);
//   }

//   @Post()
//   create(@Res() res: Response) {
//     res.status(HttpStatus.CREATED).send('asd');
//   }

//   @Get(':id/:name')
//   findOne(
//     @Param('id') id: string,
//     @Param('name') name: string,
//     @Res() res: Response,
//   ): string {
//     console.log(id);
//     // res.status(HttpStatus.CREATED).send();
//     return `This action returns a #${id} cat ${name}`;
//   }
// }
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
