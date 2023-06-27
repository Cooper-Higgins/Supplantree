package com.codeclan.treeservice.controllers;

import com.codeclan.treeservice.models.Location;
import com.codeclan.treeservice.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @GetMapping(value="/locations")
    public ResponseEntity<List<Location>> getAllLocations(){
        return new ResponseEntity<>(locationRepository.findAll(), HttpStatus.OK);
    }
}
