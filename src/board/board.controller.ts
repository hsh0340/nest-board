import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  // 모든 게시물 가져오는 API
  @Get()
  findAllBoards() {
    return 'find all boards';
  }

  // 특정 게시물을 가져오는 API
  @Get(':id')
  findOneBoard(@Param('id') id: number) {
    return `find specific board: ${id}`;
  }

  // 게시물을 생성하는 API
  @Post()
  createBoard(@Body() board) {
    return `create board: ${board}`;
  }

  // 특정 게시물을 수정하는 API
  @Put(':id')
  updateBoard(@Param('id') id: number, @Body() board) {
    return `update ${id} board: ${board}`;
  }

  // 특정 게시물을 삭제하는 API
  @Delete(':id')
  deleteBoard(@Param('id') id: number) {
    return 'delete board';
  }
}
