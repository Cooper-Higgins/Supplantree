package com.codeclan.treeservice;

import com.codeclan.treeservice.models.Tree;
import com.codeclan.treeservice.repositories.TreeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TreeserviceApplicationTests {

	@Autowired
	TreeRepository treeRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createTree(){
		Tree pine = new Tree("Pine", "Peaty", 12);
		treeRepository.save(pine);
	}

}
