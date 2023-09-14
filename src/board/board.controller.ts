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
    return this.boardService.findAllBoards();
  }

  // 특정 게시물을 가져오는 API
  @Get(':id')
  findOneBoard(@Param('id') id: string) {
    return this.boardService.findOneBoard(parseInt(id, 10));
  }

  // 게시물을 생성하는 API
  @Post()
  createBoard(@Body() board) {
    return this.boardService.createBoard(board);
  }

  // 특정 게시물을 수정하는 API
  @Put(':id')
  updateBoard(@Param('id') id: string, @Body() board) {
    return this.boardService.updateBoard(parseInt(id), board);
  }

  // 특정 게시물을 삭제하는 API
  @Delete(':id')
  deleteBoard(@Param('id') id: string) {
    return this.boardService.deleteBoard(parseInt(id));
  }
}
