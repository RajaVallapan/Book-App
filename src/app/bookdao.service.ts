import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookdaoService {
  private books:Book[];
  private baseURL = "http://localhost:8080/api/v1/books";
  private size: any;
  httpsOptions = {
    headers: new HttpHeaders({
      'Content=Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getLatestBookId():number{
    this.size = this.getBooksList();
    return this.size.length + 1;
    }

  getBooksList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.baseURL).
    pipe(
      catchError(this.errorHandler)
    )
  }

  createBook(book : Book): Observable<Object>{
    console.log('create book called in service class' + book.getBook());
    return this.httpClient.post(this.baseURL, book).
    pipe(
      catchError(this.errorHandler)
    )
  }

  getBookById(bookId: number): Observable<Book>{
    return this.httpClient.get<Book>(this.baseURL + '/' + bookId).
    pipe(
      catchError(this.errorHandler)
    )
  }

  // findBookByName(bookName: string): Observable<Object>{
  //   return this.httpClient.get<Book[]>(this.baseURL + '/' + bookName).
  //   pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
  
  updateBook(bookId: number, book: Book): Observable<Object>{
   // console.log(bookId + 'service call');
    return this.httpClient.put(this.baseURL + '/' + bookId, book).
    pipe(
      catchError(this.errorHandler)
    )
  }

  deleteBook(bookId: number): Observable<Object>{
    return this.httpClient.delete(this.baseURL + '/' + bookId).
    pipe(
      catchError(this.errorHandler)
    )
  }

  deleteAllBook(books: Book[]): Observable<Object>{
    return this.httpClient.delete(this.baseURL + '/deleteall').
    pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse) { 
    let errorMessage = ''; 
    if(error.error instanceof ErrorEvent){ 
      // Get client-side error 
      errorMessage = error.error.message; 
    } else{ 
      // Get server-side error 
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`; 
    } console.log(errorMessage); 
    return throwError(()=>error); 
  }
}

