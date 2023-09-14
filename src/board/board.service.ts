import { Injectable } from '@nestjs/common';

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
}
