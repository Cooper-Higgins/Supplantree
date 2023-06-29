package com.codeclan.treeservice;

import com.codeclan.treeservice.models.Location;
import com.codeclan.treeservice.models.Tree;
import com.codeclan.treeservice.models.User;
import com.codeclan.treeservice.repositories.LocationRepository;
import com.codeclan.treeservice.repositories.TreeRepository;
import com.codeclan.treeservice.repositories.UserRepository;
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

	@Autowired
	UserRepository userRepository;

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
		Tree tree1 = new Tree("pine",10,soil,"nature");
		treeRepository.save(tree1);
		Location location1 = new Location("Highlands", "peaty", "temperate");
		locationRepository.save(location1);
		tree1.addLocation(location1);
		treeRepository.save(tree1);
		location1.addTree(tree1);
		locationRepository.save(location1);
	}


	@Test
	public void addUsersAndTrees(){
		User user1 = new User("Neil Hutton", "sonOfJames@TheInstitute.com", "heirToTheInstitute");
		userRepository.save(user1);
		HashMap<String, Boolean> soil = new HashMap<String, Boolean>();
		soil.put("peaty", Boolean.TRUE);
		soil.put("clay", Boolean.FALSE);
		ArrayList<String> animals = new ArrayList<String>();
		animals.add("chipmunk");
		Tree tree1 = new Tree("pine",10,soil,"Nature stuff");
		treeRepository.save(tree1);
		user1.addTree(tree1);
		userRepository.save(user1);
		tree1.addUser(user1);
		treeRepository.save(tree1);
	}

}
