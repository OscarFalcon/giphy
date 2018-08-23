package com.heb.code.challenge.dao;

import com.heb.code.challenge.dao.data.User;
import javax.ejb.Stateless;
import javax.persistence.*;



@Stateless
public class GiphyDAO{

    private EntityManagerFactory factory;
    private EntityManager manager;


    public GiphyDAO(){}

    public User getUserInformation(String username){

        setUpEntityContext();

        User user = manager.find(User.class, username);

        tearDownEntityContext();

        return user;
    }

    private void setUpEntityContext(){
        factory = Persistence.createEntityManagerFactory("Giphy");
        manager = factory.createEntityManager();
        manager.getTransaction().begin();
    }

    private void tearDownEntityContext(){
        manager.getTransaction().commit();
        factory.close();
    }
}

