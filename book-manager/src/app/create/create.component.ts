import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookService } from '../book.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private bookService: BookService,private route: ActivatedRoute,private router: Router){}

    createForm = new FormGroup({
      title : new FormControl('',Validators.required),
      author : new FormControl('',Validators.required),
      published_year : new FormControl('',Validators.required),
      genre : new FormControl('',Validators.required)
    });

    get title() {
      return this.createForm.get('title');
    }
    get author() {
      return this.createForm.get('author');
    }
    get published_year() {
      return this.createForm.get('published_year');
    }
    get genre() {
      return this.createForm.get('genre');
    }

    createBook() {
       const product = {
        title : this.createForm.value.title,
        author : this.createForm.value.author,
        published_year : this.createForm.value.published_year,
        genre : this.createForm.value.genre
      }

      this.bookService.createBook(product).subscribe({
        next: data => {
          this.router.navigateByUrl('view');
        }
      });
    }

}
