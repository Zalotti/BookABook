import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

//import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { ReviewService } from '../review.service';
import { AuthService } from '../../security/auth.service';
import{User} from 'src/app/core/model';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrl: './reviews-list.component.css'
})
export class ReviewsListComponent {
  type?: string;
  initialDate?: Date;
  finalDate?: Date;

  reviews = [];

  totalRecords: number = 0;

 // filter = new ActivityFilter();

  constructor(
    private reviewService: ReviewService,
    // private confirmation: ConfirmationService,
    //private messageService: MessageService,
    //private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService
  ){ }

  ngOnInit(): void {
    this.title.setTitle('Listagem de Reviews');
    this.list();
  }

  list(): void {
    this.reviewService.list()
      .then(result => {
        this.reviews = result;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  confirmRemoval(review: any): void {    
      this.confirmation.confirm({
      message: 'Excluir permanentemente? Esta ação não pode ser desfeita.',
      accept: () => {
        this.remove(review);
      }
    });
  }

  search(page: number = 0): void {
    //this.filter.user = new User().id = this.auth.jwtPayload?.user_id;
    // this.filter.page = page;

    // this.reviewService.search(this.filter)
    //   .then((result: any) => {
    //     this.activities = result.activities;
    //     this.totalRecords = result.total;
    //   })
    //   .catch(error => this.errorHandler.handle(error));

  }

  // whenChangePage(event: LazyLoadEvent) {
  //   const page = event!.first! / event!.rows!;
  //   this.search(page);
  // }

  remove(review: any): void {
    this.reviewService.remove(review.id)
      .then(() => {
        this.list();
        this.messageService.add({ severity: 'success', detail: 'Review deletada.' });
      })
      .catch(error => this.errorHandler.handle(error));
  }
}

