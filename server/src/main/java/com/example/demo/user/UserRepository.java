package com.example.demo.user;

import org.springframework.data.repository.CrudRepository;


//Auto implemented by spring into a bean called userRepository
public interface UserRepository extends CrudRepository<User, Long> {

}
