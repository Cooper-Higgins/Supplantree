package com.codeclan.treeservice.components;

import com.codeclan.treeservice.models.User;
import com.codeclan.treeservice.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;


@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    public DataLoader(){

    }

    @Override
    public void run(ApplicationArguments args) {
        User neil = new User("Neil Hutton", "sonOfJames@TheInstitute.com", "HeirToTheInstitute");
        userRepository.save(neil);
    }
}
