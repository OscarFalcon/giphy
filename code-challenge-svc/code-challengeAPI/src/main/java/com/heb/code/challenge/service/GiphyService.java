package com.heb.code.challenge.service;

import com.heb.code.challenge.core.Content;
import com.heb.code.challenge.core.UserContent;
import com.heb.code.challenge.dao.GiphyDAO;
import com.heb.code.challenge.dao.data.User;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


public class GiphyService {

    private final GiphyDAO dao;

    public GiphyService(){
        this.dao = new GiphyDAO();
    }

    public List<Content> getFavoriteGifs(){
        Content content = new Content();
        content.setUrl("https://media1.giphy.com/media/Snd51fjjX6s0M/200.gif");
        content.setId("Snd51fjjX6s0M");

        List<Content> contentList = new ArrayList<Content>();
        contentList.add(content);

        return contentList;
    }

    public UserContent getUserContent(String username) {
       User user = dao.getUserInformation(username);

        if(user == null){
            System.out.println("null user");
            return new UserContent();
        }

        return map(user);
    }

    private static UserContent map(User user){
        UserContent userContent = new UserContent();
        userContent.setUsername(user.getUsername());


        userContent.setFavorites(user.getUserFavorites().stream()
                .map(uf -> new Content(uf.getId().toString(),uf.getContentUrl(), uf.getTitle(), uf.getDescription()))
                .collect(Collectors.toList()));


        return userContent;

    }
}
