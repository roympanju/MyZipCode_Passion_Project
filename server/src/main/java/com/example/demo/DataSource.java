package com.example.demo;

import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class DataSource extends DriverManagerDataSource {

    public DataSource(){
        super("jdbc:mysql://localhost:3306/MyApp", "root", "password");
        this.setDriverClassName("com.mysql.jdbc.Driver");
    }

}
