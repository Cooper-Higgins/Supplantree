package com.codeclan.treeservice.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "locations")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "name")
    private String name;

    @Column (name = "soil")
    private String soil;

    @Column (name = "weather")
    private String weather;

    @ManyToMany
    @JsonIgnoreProperties({"locations"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "locations_trees",
            joinColumns = {@JoinColumn(
                    name = "location_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = {@JoinColumn(
                    name = "tree_id",
                    nullable = false,
                    updatable = false)
            }
    )

    private List<Tree> trees;

    public Location(String name, String soil, String weather){
        this.name = name;
        this.soil = soil;
        this.weather = weather;
        this.trees = new ArrayList<>();
    }

    public Location(){

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSoil() {
        return soil;
    }

    public String getWeather() {
        return weather;
    }

// NH - Unlikely to use setters but left in for now
    public void setSoil(String soil) {
        this.soil = soil;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void addTree(Tree tree) {
        this.trees.add(tree);
    }
}


