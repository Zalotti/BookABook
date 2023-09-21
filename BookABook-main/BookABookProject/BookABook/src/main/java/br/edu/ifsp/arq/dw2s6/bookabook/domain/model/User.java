package br.edu.ifsp.arq.dw2s6.bookabook.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user")
public class User {
	
	 @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 @NotNull
	 @Size(min = 3, max = 50)
     private String name;
	 @NotNull
	 @Email
     private String email;
	 @NotNull
     private String password;
     @NotNull
     private Boolean active; 
     
	 public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Boolean isActive() {
		return active;
	}
	
	public void setActive(Boolean active) {
		this.active = active;
	}
}
