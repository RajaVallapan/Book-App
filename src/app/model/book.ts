export class Book{
    bookId : number;
    bookName: string;
    bookAuthor: string;

    constructor(bookId:number, bookName:string,bookAuthor:string){
        this.bookId = bookId;
        this.bookName=bookName;
        this.bookAuthor=bookAuthor;
    }

    getBook():string{
        return 'bookId:' + this.bookId + ","
                + 'bookName' + this.bookName + ","
                + 'bookAuthor' + this.bookAuthor;       
    }
    getBookId():number{
        return this.bookId;
    }
    
}
