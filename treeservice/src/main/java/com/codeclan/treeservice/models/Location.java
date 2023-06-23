package com.codeclan.treeservice.models;

import javax.persistence.*;

//******** To be uncommented once happy with classes ********
//@Entity
//@Table(name = "locations")
public class Location {

//  @Id
//  @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//  @Column
    private String name;

//  @Column
    private String soil;

//  @Column
    private String weather;

    public Location(String name, String soil, String weather){
        this.name = name;
        this.soil = soil;
        this.weather = weather;
    }

    public Location(){

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

// NH - Unlikely to use but left in for now
    public void setSoil(String soil) {
        this.soil = soil;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    public void setName(String name) {
        this.name = name;
    }
}
