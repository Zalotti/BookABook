package br.edu.ifsp.arq.dw2s6.bookabook.service;

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
	
	public Review update(Long id, Review task) {
		Review taskSaved = reviewRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(task, taskSaved, "id");
		return reviewRepository.save(taskSaved);
	}
	

	public Review save(Review review) {
		Optional<User> user = userRepository.findById(review.getUser().getId());
		if(!user.isPresent() || !user.get().isActive()) {
			throw new NonExistentOrInactiveUserException();
		}
		return reviewRepository.save(review);
	}

}
