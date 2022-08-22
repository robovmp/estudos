package br.com.academy.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.boot.convert.DataSizeUnit;

import br.com.academy.enums.Curso;
import br.com.academy.enums.Status;

@Entity
public class Aluno {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(name="nome")
	@Size(min = 5, max = 35, message="O nome deve conter no mínio 5 caracteres.")
	@NotBlank(message="O nome não pode ser vazio.")
	private String nome;
	
	@Column(name="curso")
	@Enumerated(EnumType.STRING)
	@NotNull(message = "o Campo curso não pode ser nulo.")
	private Curso curso;
	
	@Column(name="matricula")
	@NotNull(message = "Clique no botão 'Gerar'!")
	@Size(min = 3, message= "Clique no botão gerar!")
	private String matricula;
	
	@Column(name="status")
	@Enumerated(EnumType.STRING)
	@NotNull(message = "O Campo status não pode ser nulo.")
	private Status status;
	
	@NotBlank(message = "O Campo turno não pode ser vazio.")
	@Size(min=4, message = "No mínimo 4 caracteres. ")
	private String turno;

	public Integer getId() {
		return id;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getTurno() {
		return turno;
	}

	public void setTurno(String turno) {
		this.turno = turno;
	}
	
	
}
