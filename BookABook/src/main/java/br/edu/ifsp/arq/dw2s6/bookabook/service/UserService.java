package br.edu.ifsp.arq.dw2s6.bookabook.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.edu.ifsp.arq.dw2s6.bookabook.domain.model.User;
import br.edu.ifsp.arq.dw2s6.bookabook.domain.model.Permission;
import br.edu.ifsp.arq.dw2s6.bookabook.repository.UserRepository;
import br.edu.ifsp.arq.dw2s6.bookabook.repository.PermissionRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired 
	PermissionRepository permissionRepository;
	
	public User save(User user) {
		user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
		user.setPermissions(addCommonUserPermissions());
		return userRepository.save(user);
	}

	//Permissão Comum do Usuário
	public List<Permission> addCommonUserPermissions(){
		List<Permission> permissions = new ArrayList<>();
		permissions.add(permissionRepository.findById(1L).get());
		permissions.add(permissionRepository.findById(3L).get());
		permissions.add(permissionRepository.findById(4L).get());
		permissions.add(permissionRepository.findById(5L).get());
		permissions.add(permissionRepository.findById(6L).get());
		return permissions;
	}
	
	public User update(Long id, User user) {
		User userSaved = userRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(user, userSaved, "id");
		return userRepository.save(userSaved);
	}

	public void updateActiveProperty(Long id, Boolean active) {
		User userSaved = findUserById(id);
		userSaved.setActive(active);
		userRepository.save(userSaved);
	}
	
	public User findUserById(Long id) {
		User userSaved = userRepository.findById(id)
				.orElseThrow(
				(() -> new EmptyResultDataAccessException(1)));
		return userSaved;
	}

	
}
