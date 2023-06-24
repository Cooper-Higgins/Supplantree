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

    @Column
    private String species;

    @Column
    private HashMap<String, Boolean> soil;

    @Column
    private String area;

    @Column
    private ArrayList<String> animals;

    @Column
    private int size;

    @JsonIgnoreProperties({"trees"})
    @ManyToMany
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

    public Tree(String species, String area, int size){
        this.species = species;
        this.area = area;
        this.size = size;
        this.soil = new HashMap<>();
        this.animals = new ArrayList<String>();
        this.locations = new ArrayList<Location>();
    }

    public Tree(){

    }

    public String getSpecies() {
        return species;
    }

    public HashMap<String, Boolean> getSoil() {
        return soil;
    }


    public String getArea() {
        return area;
    }

    public ArrayList<String> getAnimals() {
        return animals;
    }

    public int getSize() {
        return size;
    }

    public List<Location> getLocations() {
        return locations;
    }

    public void setLocations(List<Location> locations) {
        this.locations = locations;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public void setSoil(HashMap<String, Boolean> soil) {
        this.soil = soil;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public void setAnimals(ArrayList<String> animals) {
        this.animals = animals;
    }

    public void setSize(int size) {
        this.size = size;
    }
}
