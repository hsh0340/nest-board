import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

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
  findOneBoard(@Param('id', ParseIntPipe) id: number) {
    return this.boardService.findOneBoard(id);
  }

  // 게시물을 생성하는 API
  @Post()
  createBoard(@Body(new ValidationPipe()) board: CreateBoardDto) {
    return this.boardService.createBoard(board);
  }

  // 특정 게시물을 수정하는 API
  @Put(':id')
  updateBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) board: UpdateBoardDto,
  ) {
    return this.boardService.updateBoard(id, board);
  }

  // 특정 게시물을 삭제하는 API
  @Delete(':id')
  deleteBoard(@Param('id', ParseIntPipe) id: number) {
    return this.boardService.deleteBoard(id);
  }
}
