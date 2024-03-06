import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookdaoService } from '../bookdao.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{
  bookId : number;
  book: Book = new Book(0,'','');
  constructor(private bookdaoService: BookdaoService,
    private route: ActivatedRoute,
    private router: Router){ 
      this.bookId = this.route.snapshot.params['bookId'];
   }

  ngOnInit(): void {
    
    this.bookdaoService.getBookById(this.bookId).subscribe(
      data => {
        this.book = data;
      }, error => console.log(error));
  }

  onSubmit(){
    this.bookdaoService.updateBook(this.bookId, this.book).subscribe( data =>{
      this.goToBookList();
    }
    , error => console.log(error));
  }
  
  goToBookList(){
    this.router.navigate(['/books']);
  }
}
