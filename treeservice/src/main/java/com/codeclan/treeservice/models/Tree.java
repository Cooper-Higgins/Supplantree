package com.codeclan.treeservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Entity
@Table(name = "trees")
public class Tree implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "species")
    private String species;

    @Column (name = "soil")
    private HashMap<String, Boolean> soil;


    @Column (name = "animals")
    private ArrayList<String> animals;

    @Column (name = "size")
    private int size;

    @ManyToMany
    @JsonIgnoreProperties({"trees"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "locations_trees",
            joinColumns = {@JoinColumn(
                    name = "tree_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = {@JoinColumn(
                    name = "location_id",
                    nullable = false,
                    updatable = false)
            }
    )

    private List<Location> locations;


    @ManyToMany
    @JsonIgnoreProperties({"trees"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_trees",
            joinColumns = {@JoinColumn(
                    name = "tree_id",
                    nullable = true,
                    updatable = false)
            },
            inverseJoinColumns = {@JoinColumn(
                    name = "user_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<User> users;

    public Tree(String species, int size, HashMap soil, ArrayList animals){
        this.species = species;
        this.size = size;
        this.soil = new HashMap<>();
        this.animals = new ArrayList<>();
        this.locations = new ArrayList<>();
        this.users = new ArrayList<>();
    }

    public Tree(){

    }

    public Long getId() {
        return id;
    }

    public String getSpecies() {
        return species;
    }

    public HashMap<String, Boolean> getSoil() {
        return soil;
    }

    public ArrayList<String> getAnimals() {
        return animals;
    }

    public int getSize() {
        return size;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public void setSoil(HashMap<String, Boolean> soil) {
        this.soil = soil;
    }

    public void setAnimals(ArrayList<String> animals) {
        this.animals = animals;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public void addLocation(Location location) {
        this.locations.add(location);}
}
