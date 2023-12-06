package br.edu.ifsp.arq.dw2s6.bookabook.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.edu.ifsp.arq.dw2s6.bookabook.domain.model.Review;
import br.edu.ifsp.arq.dw2s6.bookabook.domain.model.User;
import br.edu.ifsp.arq.dw2s6.bookabook.repository.ReviewRepository;
import br.edu.ifsp.arq.dw2s6.bookabook.repository.UserRepository;
import br.edu.ifsp.arq.dw2s6.bookabook.service.exception.NonExistentOrInactiveUserException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository reviewRepository;
	
	@Autowired
	private UserRepository userRepository;

        //Lista Todas Reviews   
	public List<Review> getAllReviews() {
	        return reviewRepository.findAll();
	}

	//Lista Review por Usuário (E-mail)
	public List<Review> listByUser(String email){
		Optional<User> user = userRepository.findByEmail(email);
		//Verifica se o Usuário Existe
		if(user.isPresent()) {
			return reviewRepository.findByUser(user.get());
		}
		return null;
	}

	//Lista Review por Id
	public Review findReviewById(Long id) {
		Review reviewSaved = reviewRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return reviewSaved;
	}

	//Atualiza a Review
	public Review update(Long id, Review review) {
		Review reviewSaved = reviewRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(review, reviewSaved, "id");
		return reviewRepository.save(reviewSaved);
	}
	
       //Salva a Review por Usuário
	public Review save(Review review) {
		Optional<User> user = userRepository.findById(review.getUser().getId());
		if(!user.isPresent() || !user.get().isActive()) {
			throw new NonExistentOrInactiveUserException();
		}
		return reviewRepository.save(review);
	}

}
