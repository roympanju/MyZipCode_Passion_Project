package com.example.demo.user;

import org.springframework.data.repository.CrudRepository;

//Auto implemenred by spring into a bean called userRepository
public interface UserRepository extends CrudRepository<User, Long> {

}
