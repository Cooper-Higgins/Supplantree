package com.codeclan.treeservice.components;

import com.codeclan.treeservice.models.Location;
import com.codeclan.treeservice.models.User;
import com.codeclan.treeservice.repositories.LocationRepository;
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

    @Autowired
    LocationRepository locationRepository;

    public DataLoader(){

    }

    @Override
    public void run(ApplicationArguments args) {
        User neil = new User("Neil Hutton", "sonOfJames@TheInstitute.com", "HeirToTheInstitute");
        userRepository.save(neil);

        Location dundee = new Location("Dundee and Fife", "Brown Forest Soil", "Sunny");
        locationRepository.save(dundee);

        Location hebrides = new Location("Outer Hebrides", "Peaty", "Very rainy");
        locationRepository.save(hebrides);

        Location west = new Location("Western Scotland", "Peaty", "Very rainy");
        locationRepository.save(west);

        Location east = new Location("Easten Scotland", "Humus Iron, Brown Forest Soil", "Less rainy?");
        locationRepository.save(east);

        Location highlands = new Location("Highlands", "Peat", "Very rainy and windy");
        locationRepository.save(highlands);

        Location glasgow = new Location("Glasgow", "Brown Forest Soil", "Rainy");
        locationRepository.save(glasgow);

        Location edinburgh = new Location("Edinburgh", "Brown Forest Soil", "Less rainy");
        locationRepository.save(edinburgh);
    }
}
