package com.codeclan.treeservice;

import com.codeclan.treeservice.models.Location;
import com.codeclan.treeservice.models.Tree;
import com.codeclan.treeservice.repositories.LocationRepository;
import com.codeclan.treeservice.repositories.TreeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.HashMap;

@SpringBootTest
public class TreeserviceApplicationTests {

	@Autowired
	TreeRepository treeRepository;

	@Autowired
	LocationRepository locationRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void addTreesAndLocations(){
		HashMap<String, Boolean> soil = new HashMap<String, Boolean>();
		soil.put("peaty", Boolean.TRUE);
		soil.put("clay", Boolean.FALSE);
		ArrayList<String> animals = new ArrayList<String>();
		animals.add("chipmunk");
		Tree tree1 = new Tree("pine",10,soil,animals);
		treeRepository.save(tree1);
		Location location1 = new Location("Highlands", "peaty", "temperate");
		locationRepository.save(location1);
		tree1.addLocation(location1);
		treeRepository.save(tree1);
		location1.addTree(tree1);
		locationRepository.save(location1);

	}

}
