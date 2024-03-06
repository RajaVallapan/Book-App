import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookdaoService } from '../bookdao.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  bookId : number;
  book = new Book(1,'','');
  books!: Book[];
  data:string;
  
  constructor(private bookdaoService: BookdaoService,
    private route: ActivatedRoute,
    private router: Router,){ 
      this.bookId = this.route.snapshot.params['bookId'];
   }
   bookDetails(bookId: number){
    this.router.navigate(['book-details', bookId]);
  }
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

  // public findBookByName(){
  //   this.bookdaoService.findBookByName(this.bookName).subscribe(
  //     data => {
  //       console.log(data);
  //       //this.books = data;
  //     }
  //   )
  // }

  

}