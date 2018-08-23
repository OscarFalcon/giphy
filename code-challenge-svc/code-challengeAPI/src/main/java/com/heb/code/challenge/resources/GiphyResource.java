package com.heb.code.challenge.resources;

import com.heb.code.challenge.core.Content;
import com.heb.code.challenge.service.GiphyService;

import javax.annotation.security.PermitAll;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;


@Path("/")
@PermitAll
public class GiphyResource
{

    @GET
    @Path("favorites")
    @Produces("application/json")
    public Response getFavoriteGifs(){
        return Response.ok(new GiphyService().getFavoriteGifs()).build();
    }


    @GET
    @Path("/user/{username}")
    @Produces("application/json")
    public Response getUserFavoriteGifs(@PathParam("username") String username) {
        return Response.ok(new GiphyService().getUserContent(username)).build();
    }

    @POST
    @Path("/user/{username}/favorites")
    @Produces("application/json")
    public Response addContentToFavorites(@NotNull Content content, @PathParam("username") String username) {
        return Response.ok(content.getId()).build();
    }


}
