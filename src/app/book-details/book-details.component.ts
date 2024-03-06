import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookdaoService } from '../bookdao.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookId: number;
  book: Book;
  constructor(private route: ActivatedRoute,
    private bookdaoService: BookdaoService) {
      this.bookId = this.route.snapshot.params['bookId'];
      this.book = new Book(1,'','');
    }

  ngOnInit():void {
    
    this.bookdaoService.getBookById(this.bookId).subscribe(
      data => {
        this.book = data;
      });
  }
}
