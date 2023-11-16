package com.map.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "markers")
public class Marker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "int")
    private Long id;

    @Column(name = "title", nullable = false, unique = true)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "category_id", nullable = false)
    private Integer categoryId;

    @Column(name = "rating", nullable = false)
    private int rating;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private MarkerType type;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;

    @OneToMany(mappedBy = "marker")
    private List<FavouritePlace> favouritePlaceList;

    @Column(name = "created_at")
    @CreatedDate
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    @LastModifiedDate
    private LocalDateTime updatedAt;

//   TODO: add later
//    private String openingHours;
//    private String contactInfo;
//    private List<String> photos;
//    private String address;
}
