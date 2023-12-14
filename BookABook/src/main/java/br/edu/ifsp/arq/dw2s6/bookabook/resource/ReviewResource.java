package br.edu.ifsp.arq.dw2s6.bookabook.resource;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifsp.arq.dw2s6.bookabook.domain.model.Review;
import br.edu.ifsp.arq.dw2s6.bookabook.repository.ReviewRepository;
import br.edu.ifsp.arq.dw2s6.bookabook.service.ReviewService;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/reviews")
public class ReviewResource {

	@Autowired
	private ReviewRepository reviewRepository;
	@Autowired
	private ReviewService reviewService;
	
	//Retorna todas reviews
	//GET
	@GetMapping
	public List<Review> list(){
		return reviewRepository.findAll();
	}
	
	//Cria Review
	//POST
		@PostMapping
		@ResponseStatus(HttpStatus.CREATED)
		//@PreAuthorize("hasAuthority('ROLE_REGISTER_ACTIVITY') and #oauth2.hasScope('write')")
		public Review create(@Valid @RequestBody Review review) {
			return reviewRepository.save(review);
		}
		
		//Buscar Review por Id
		@GetMapping("/{id}")
		public ResponseEntity<Review> findById(@PathVariable Long id){
			Optional<Review> review = reviewRepository.findById(id);
			if(review.isPresent()) {
				return ResponseEntity.ok(review.get());
			}
			return ResponseEntity.notFound().build();
		}
		
		//Deleta Review por Id
		@DeleteMapping("/{id}")
		@ResponseStatus(HttpStatus.NO_CONTENT)
		public void remove(@PathVariable Long id) {
			reviewRepository.deleteById(id);
		}

		@PutMapping("/{id}")
		@PreAuthorize("hasAuthority('ROLE_REGISTER_ACTIVITY') and #oauth2.hasScope('write')")
		public ResponseEntity<Review> update(@PathVariable Long id, @Valid @RequestBody Review review) {
			Review reviewSaved = reviewService.update(id, review);
			return ResponseEntity.ok(reviewSaved);
		}
		
}
