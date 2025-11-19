import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookService } from '../book.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  id! : string;
  product : any;

  constructor(private bookService: BookService,private route: ActivatedRoute,private router: Router){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookId(this.id).subscribe({
      next: data => {
        this.product = data;
        this.editForm.patchValue({
          prodId : this.product.id,
          title : this.product.title,
          author : this.product.author,
          published_year : this.product.published_year,
          genre : this.product.genre
        });
      }
    });
  }
    editForm = new FormGroup({
      prodId : new FormControl('',Validators.required),
      title : new FormControl('',Validators.required),
      author : new FormControl('',Validators.required),
      published_year : new FormControl('',Validators.required),
      genre : new FormControl('',Validators.required)
    });

    get prodId() {
      return this.editForm.get('prodId');
    }
    get title() {
      return this.editForm.get('title');
    }
    get author() {
      return this.editForm.get('author');
    }
    get published_year() {
      return this.editForm.get('published_year');
    }
    get genre() {
      return this.editForm.get('genre');
    }


    editBook() {
      const product = {
        id : this.editForm.value.prodId,
        title : this.editForm.value.title,
        author : this.editForm.value.author,
        published_year : this.editForm.value.published_year,
        genre : this.editForm.value.genre
      }

      this.id = this.route.snapshot.params['id'];
      this.bookService.editBook(this.id,product).subscribe({
        next : data => {
          this.router.navigate(['view']);
        }
      });
    }

}
