package com.mozen.springbootkeycloack.service;

import com.mozen.springbootkeycloack.model.User;
import com.mozen.springbootkeycloack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repo;

    public User add(User user)
    {
        return repo.save(user);
    }

    public List<User> list()
    {
        return repo.findAll();
    }

    public String delete(Long id) {
        repo.deleteById(id);
        return "Deleted: " + id;
    }

    public User getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public User saveData(User user) {
        return repo.save(user);
    }
}
