package com.map.repositories;

import com.map.entities.FavouritePlace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavouritePlaceRepository extends JpaRepository<FavouritePlace, Long> {
}
