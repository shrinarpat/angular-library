import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  get title() {
    return this.postForm.get('title');
  }

  get description() {
    return this.postForm.get('description');
  }

  handleAddPost() {
    // console.log(this.postForm.value);
    if (this.postForm.valid) {
      // TODO: dispatch addpost action
      this.store.dispatch(addPost({ post: this.postForm.value }));
      this.postForm.reset();
    } else {
      alert('Invalid post data');
    }
  }

  getTitleErrors() {
    if (this.title?.touched && this.title.invalid) {
      if (this.title?.errors?.['required']) {
        return 'This is a required field';
      }

      if (this.title?.errors?.['minlength']) {
        return 'Title should be at least 6 characters long';
      }
    }

    return null;
  }

  getDescriptionErrors() {
    if (this.description?.touched && this.description.invalid) {
      if (this.description?.errors?.['required']) {
        return 'This is a requird field';
      }

      if (this.description?.errors?.['minlength']) {
        return 'Description should be at least 10 characters long';
      }
    }
    return null;
  }
}
