package com.JavaBackend.JavaBackend.controller;

import com.JavaBackend.JavaBackend.entity.User;
import com.JavaBackend.JavaBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class UserController {
    @Autowired
    private UserService service;


    //@Secured("Admin")
    @PostMapping("/add")
    public User addUser(@RequestBody User user){

        return service.add(user);
    }

    @GetMapping("/list")
    public List<User> listUser(){
        return service.list();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser( @PathVariable Long id){
        service.delete(id);
        return "Deleted: " + id;
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Object> editAnalytics(@PathVariable Long id, @RequestBody User newData){
        User existingData = service.getById(id);
        //return ResponseEntity.ok("Data updated successfully");

        existingData.setUser_name(newData.getUser_name());
        existingData.setEmail_id(newData.getEmail_id());
        existingData.setPhone_no(newData.getPhone_no());


        // Save the updated data to the database
        User updatedData = service.saveData(existingData);

        // Return the updated data in the response
        return ResponseEntity.ok(updatedData);
    }
}
