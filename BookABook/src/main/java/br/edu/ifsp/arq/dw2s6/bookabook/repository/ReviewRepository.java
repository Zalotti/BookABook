package br.edu.ifsp.arq.dw2s6.bookabook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.arq.dw2s6.bookabook.domain.model.Review;
import br.edu.ifsp.arq.dw2s6.bookabook.domain.model.User;

public interface ReviewRepository extends JpaRepository<Review,Long>{

  public List<Review> findByUser(User user);

}
