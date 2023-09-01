package br.edu.ifsp.arq.dw2s6.bookabook.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.edu.ifsp.arq.dw2s6.bookabook.domain.model.Review;
import br.edu.ifsp.arq.dw2s6.bookabook.repository.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository taskRepository;
	
	public Review update(Long id, Review task) {
		Review taskSaved = taskRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(task, taskSaved, "id");
		return taskRepository.save(taskSaved);
	}

}
