package com.codeclan.treeservice.controllers;

import com.codeclan.treeservice.models.Tree;
import com.codeclan.treeservice.repositories.TreeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class TreeController {

    @Autowired
    TreeRepository treeRepository;

    @GetMapping(value="/trees")
    public ResponseEntity<List<Tree>> getAllTrees(){
        return new ResponseEntity<>(treeRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/trees/{id}")
    public ResponseEntity<Optional<Tree>> getTree(@PathVariable Long id){
        return new ResponseEntity<>(treeRepository.findById(id), HttpStatus.OK);
    }
}
