import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute,Route,Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

   allBooks: Book[] = [];


  constructor(private bookService : BookService,private route:ActivatedRoute,private router:Router){
    this.bookService.getAllBooks().subscribe({
      next: data => this.allBooks = data,
      error: error => console.log(error)
    });
  }
  
  edit(id:any) {
    this.router.navigate(['edit',id]);

  }


  delete(id:any) {
    this.bookService.deleteBook(id).subscribe({
      next : data => {
      this.bookService.getAllBooks().subscribe({
      next: data => this.allBooks = data,
      error: error => console.log(error)
    });
  }
  });
  }

}
