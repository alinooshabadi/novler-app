export interface Quote {
  id: number;
  writer_UserId: string;
  novel_Id: number;
  text: string;
  voteUp: number;
  voteDown: number;
  rate: number;
  likes: number;
  markAsSpam: boolean;
  date: Date;
  isDeleted: boolean;
  isSpoil: boolean;
  views: number;
  bookPage: number;
  copyright: string;
  publishInFirstPage: boolean;
}
