package com.heb.code.challenge.core;

/**
 * Created by falcon on 8/19/18.
 */
public class Content {

    private String id;
    private String url;
    private String title;
    private String description;

    public Content(){}

    public Content(String id, String url, String title, String description){
        this.id = id;
        this.url = url;
        this.title = title;
        this.description = description;
    }


    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}


