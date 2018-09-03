package com.example.demo.Repository;

import com.example.demo.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

//Auto implemented by spring into a bean called userRepository
public interface UserRepository extends JpaRepository<User, Long> {

}
