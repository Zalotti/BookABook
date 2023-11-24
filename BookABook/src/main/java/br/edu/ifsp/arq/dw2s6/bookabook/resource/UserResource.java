package br.edu.ifsp.arq.dw2s6.bookabook.resource;

import java.util.List;
import java.util.Optional;

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
import br.edu.ifsp.arq.dw2s6.bookabook.domain.model.User;
import br.edu.ifsp.arq.dw2s6.bookabook.repository.UserRepository;
import br.edu.ifsp.arq.dw2s6.bookabook.service.UserService;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/users")
@Valid
public class UserResource {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserService userService;
	
	//Retorna todos usuários
	//GET
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_SEARCH_USER') and #oauth2.hasScope('read')")
	public List<User> list(){
		return userRepository.findAll();
	}
	
	//Cria usuário
	//POST
	//Exemplo: 
	//{
    //"name": "João Vitor",
    //"email": "jvjv@email.com",
    //"password": "123123",
    //"active": true
    //}
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_REGISTER_USER') and #oauth2.hasScope('write')")
	public User create(@RequestBody User user, HttpServletResponse response) {
		return userRepository.save(user);
	}
	
	//Buscar Usuário por Id
	@GetMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_SEARCH_USER') and #oauth2.hasScope('read')")
	public ResponseEntity<User> findById(@PathVariable Long id){
		Optional<User> user = userRepository.findById(id);
		if(user.isPresent()) {
			return ResponseEntity.ok(user.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	//Deleta Usuário por Id
	@DeleteMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_REMOVE_USER') and #oauth2.hasScope('write')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remove(@PathVariable Long id) {
		userRepository.deleteById(id);
	}
	
	
	//Atualiza Usuário por Id
	@PutMapping("/{id}")
	@PreAuthorize("hasAuthority('ROLE_REGISTER_USER') and #oauth2.hasScope('write')")
	public ResponseEntity<User> update(@PathVariable Long id, @Valid @RequestBody User user) {
		User userSaved = userService.update(id, user);
		return ResponseEntity.ok(userSaved);
	}

	
}
