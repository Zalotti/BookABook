package br.edu.ifsp.arq.dw2s6.bookabook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.arq.dw2s6.bookabook.domain.model.Permission;

public interface PermissionRepository extends JpaRepository<Permission, Long>{

}
