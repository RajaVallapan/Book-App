import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookdaoService } from '../bookdao.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book;
  
  constructor(private bookdaoService: BookdaoService,
    private router: Router,
    private route: ActivatedRoute){
      this.bookdaoService = bookdaoService;
      this.book = new Book(1,'','');
     }
     ngOnInit(): void {
    }
  
      saveBook(){
        this.bookdaoService.createBook(this.book).subscribe(
          data => {
            console.log(data);
            this.goToBookList();
          },
          error => console.log(error) )
      }

      goToBookList(){
        this.router.navigate(['/books']);
      }

      onSubmit(){
        console.log(this.book);
        console.log('book created');
            this.saveBook();
      }
}
