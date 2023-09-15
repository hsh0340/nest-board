import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from "./dto/create-board.dto";
import { UpdateBoardDto } from "./dto/update-board.dto";

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      title: '게시물 제목',
      content: 'hello world',
    },
    {
      id: 2,
      title: '게시물 제목',
      content: 'hello world',
    },
    {
      id: 3,
      title: '게시물 제목',
      content: 'hello world',
    },
    {
      id: 4,
      title: '게시물 제목',
      content: 'hello world',
    },
    {
      id: 5,
      title: '게시물 제목',
      content: 'hello world',
    },
    {
      id: 6,
      title: '게시물 제목',
      content: 'hello world',
    },
    {
      id: 7,
      title: '게시물 제목',
      content: 'hello world',
    },
    {
      id: 8,
      title: '게시물 제목',
      content: 'hello world',
    },
  ];

  findAllBoards() {
    return this.boards;
  }

  findOneBoard(id: number) {
    const index = this.getSameBoardIndex(id);
    return this.boards[index];
  }

  createBoard(board: CreateBoardDto) {
    const newBoard = { id: this.autoCreateNextBoardId(), ...board };
    this.boards.push(newBoard);
    return newBoard;
  }

  autoCreateNextBoardId() {
    return this.boards.sort((a, b) => b.id - a.id)[0].id + 1;
  }

  updateBoard(id: number, board: UpdateBoardDto) {
    const index = this.getSameBoardIndex(id);
    if (index > -1) {
      this.boards[index] = { ...this.boards[index], ...board };
      return this.boards[index];
    }

    return null;
  }

  getSameBoardIndex(id: number) {
    return this.boards.findIndex((board) => board.id === id);
  }

  deleteBoard(id: number) {
    const index = this.getSameBoardIndex(id);

    if (index > -1) {
      const deletedBoard = this.boards[index];
      this.boards.splice(index, 1);
      return deletedBoard;
    }

    return null;
  }
}
