import moment from 'moment';

export class User {
  id!: number;

  constructor(){
    this.id = 1;
  }
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
  user = new User();

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