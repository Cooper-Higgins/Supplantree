package com.codeclan.treeservice.controllers;

import com.codeclan.treeservice.models.Tree;
import com.codeclan.treeservice.repositories.TreeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
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

    @PostMapping(value="/trees")
    public ResponseEntity<Tree> createTree(@RequestBody Tree tree){
        treeRepository.save(tree);
        return new ResponseEntity<>(tree, HttpStatus.CREATED);
    }
}
