package com.heb.code.challenge.application;


import com.heb.code.challenge.resources.GiphyResource;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;


@ApplicationPath("/v1/content/giphy")
public class GiphyApplication extends Application{

    @Override
    public Set<Class<?>> getClasses() {
        final Set<Class<?>> classes = new HashSet<>();
        classes.add(GiphyResource.class);
        return classes;
    }
}
