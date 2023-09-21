package br.edu.ifsp.arq.dw2s6.bookabook.domain.model;

import java.sql.Date;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "review")
public class Review {

	 @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 @NotNull
	 private String review_name;
	 @NotNull 
	 private String book_name;
	 @NotNull
	 private String description;
	 @NotNull
	 private Date review_date;
	 @NotNull
	 private String observation; 
	 //Referencia Usuário
	 @ManyToOne
	 @JoinColumn(name = "user_id")
	 private User user;
	 //Referencia Categoria do Livro
	 @NotNull
	 @Enumerated(EnumType.STRING)
	 private CategoryBook category;
	 //Referencia Avaliação do Livro
	 @NotNull
	 @Enumerated(EnumType.STRING)
	 private BookRate rate;
	public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public Date getReview_date() {
			return review_date;
		}
		public void setReview_date(Date review_date) {
			this.review_date = review_date;
		}
		public String getObservation() {
			return observation;
		}
		public void setObservation(String observation) {
			this.observation = observation;
		}
		public User getUser() {
			return user;
		}
		public void setUser(User user) {
			this.user = user;
		}
		public CategoryBook getCategory() {
				return category;
			}
		public void setCategory(CategoryBook category) {
				this.category = category;
		}
		public BookRate getRate() {
			return rate;
		}
		public void setRate(BookRate rate) {
			this.rate = rate;
		}
}
