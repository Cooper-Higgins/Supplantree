package com.codeclan.treeservice.repositories;

import com.codeclan.treeservice.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Long> {
}
