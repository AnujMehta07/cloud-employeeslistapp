package com.sap.employeeslist;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "\"com.sap.employeeslist::Employee\"")
public class Employee implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "\"id\"", nullable = false)

	@GeneratedValue
	private int id;

	@Column(name = "\"firstName\"", length = 100)
	private String firstName;

	@Column(name = "\"lastName\"", length = 100)
	private String lastName;

	public Employee() {
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getLastName() {
		return lastName;
	}
}