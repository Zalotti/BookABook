import moment from 'moment';
import { AuthService } from '../security/auth.service';

export class User {
  id!: number;
}

export class Review {
  id!: number;
  image!: string;
  description!: string;
  category!: string; //o ideal seria uma dropbox
  review_name!: string;
  book_name!: string;
  observation!: string;
  rate!: number;
  review_date!: Date;
  user: any;

  constructor(user_id: number){
    this.user = new User();
    this.user.id = user_id;
  }

  static toJson(review: Review): any {
    return {
        id: review.id,
        image: review.image,
        description: review.description,
        category: review.category,
        review_name: review.review_name,
        book_name: review.book_name,
        observation: review.observation,
        rate: review.rate,
        review_date: moment(review.review_date).format('DD/MM/YYYY'),
        user: review.user
    }
  }
}