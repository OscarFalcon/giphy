package com.heb.code.challenge.dao.data;


import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "USER")
public class User {

    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "id")
    private Integer id;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_CONTENT_FAVORITES",
            joinColumns=@JoinColumn(name="username", referencedColumnName = "username"),
            inverseJoinColumns={@JoinColumn(name="content_id", referencedColumnName="content_id")})
    Set<ContentDefinition> userFavorites;

    public User(){}

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Set<ContentDefinition> getUserFavorites() {
        return userFavorites;
    }

    public void setUserFavorites(Set<ContentDefinition> userFavorites) {
        this.userFavorites = userFavorites;
    }
}
