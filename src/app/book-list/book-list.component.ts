import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookdaoService } from '../bookdao.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  books!: Book[];

  constructor(private bookdaoService: BookdaoService,
    private router: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(){
    this.bookdaoService.getBooksList().subscribe(
      data => {
        console.log(data);
        this.books = data;

      });

  }

  bookDetails(bookId: number){
    this.router.navigate(['book-details', bookId]);
  }

  updateBook(bookId: number, bookName: string){
    console.log(bookId + ' book list method' );
    console.log(bookName + 'bool list method');
    this.router.navigate(['update-book',bookId]);
  }

  deleteBook(bookId: number){
    this.bookdaoService.deleteBook(bookId).subscribe(
      data => {
        console.log(data);
        this.getBooks();
      });
  }

  deleteAllBooks(books: Book[]){
    this.bookdaoService.deleteAllBook(books).subscribe(
      data => {
        console.log(data);
        this.getBooks();
      }
    )
  }
}
