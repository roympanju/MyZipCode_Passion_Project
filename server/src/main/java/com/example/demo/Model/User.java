package com.example.demo.Model;

import javax.persistence.*;

@Entity// this tells Hibernate to make a table out of this class
public class User {

    @Id
    @GeneratedValue(strategy =GenerationType.AUTO)
    private long user_id;
    private String username;
    private String email;
    private String password;
    @ManyToMany
    @JoinColumn(name = "team_id")
    private Team team;


    public User(){

    }

    public User(String username, String email, String password) {
        this.username = username;
        this.password = password;
        this.email = email;

    }

    public long getId() {
        return user_id;

    }

    public void setId(long id) {
        this.user_id = id;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;

    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
