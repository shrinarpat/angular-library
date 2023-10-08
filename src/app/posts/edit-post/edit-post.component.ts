import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { Post } from 'src/app/models/posts.model';
import { updatePost } from '../state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  postForm: FormGroup;
  post: Post | null;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.store.select(getPostById(id)).subscribe((data) => {
        // console.log('subscription called: ', data);
        this.post = data;
        this.createForm();
      });
    });
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post?.description, [
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

  handleEditPost() {
    // console.log(this.postForm.value);
    if (this.postForm.valid) {
      // TODO: dispatch addpost action
      this.store.dispatch(
        updatePost({ post: { ...this.postForm.value, id: this.post?.id } })
      );
      this.postForm.reset();
      this.router.navigate(['/posts'])
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
