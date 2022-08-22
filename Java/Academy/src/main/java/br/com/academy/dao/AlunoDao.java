package br.com.academy.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.academy.model.Aluno;

public interface AlunoDao extends JpaRepository<Aluno, Integer> {
	
	@Query("select a from Aluno a where a.status = 'ATIVO'")
	public List<Aluno> findbyStatusAtivos();
	
	@Query("select i from Aluno i where i.status = 'INATIVO'")
	public List<Aluno> findbyStatusInativo();
	
	@Query("select t from Aluno t where t.status = 'TRANCADO'")
	public List<Aluno> findbyStatusTrancado();
	
	@Query("select c from Aluno c where c.status = 'CANCELADO'")
	public List<Aluno> findbyStatusCancelado();
	
	public List<Aluno> findByNomeContainingIgnoreCase(String nome);
}
