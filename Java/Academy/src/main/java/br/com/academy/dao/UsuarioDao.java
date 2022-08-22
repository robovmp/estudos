package br.com.academy.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.academy.model.Usuario;

public interface UsuarioDao extends JpaRepository<Usuario, Long> {
	
	@Query("select l from Usuario l where l.email = :email")
	public Usuario findByEmail(String email);
	
	@Query("select b from Usuario b where b.user = :user and b.senha = :senha")
	public Usuario buscarLogin(String user, String senha);

}
