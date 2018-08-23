package com.heb.code.challenge.core;


import java.util.List;

public class UserContent {

    private String username;

    private List<Content> favorites;


    public UserContent(){}

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Content> getFavorites() {
        return favorites;
    }

    public void setFavorites(List<Content> favorites) {
        this.favorites = favorites;
    }
}
