import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

   createBook(prod : any) : Observable<Book> {
    return this.http.post<Book>('https://worksheet-library.mashupstack.com/books',prod);

  }

  getAllBooks() : Observable<Book[]> {
    return this.http.get<Book[]>('https://worksheet-library.mashupstack.com/books');
  }

  getBookId(id : any) : Observable<Book>{
    return this.http.get<Book>(`https://worksheet-library.mashupstack.com/books/${id}`);

  }

  deleteBook(id : any) : Observable<Book> {
    return this.http.delete<Book> (`https://worksheet-library.mashupstack.com/books/${id}`);
  }

  editBook(id : any, prod : any) {
    return this.http.put<Book>(`https://worksheet-library.mashupstack.com/books/${id}`,prod);
  }
}
