
package com.cuttiecats.cat;

import jakarta.persistence.*;

@Entity
@Table(name = "cats")
public class Cat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String breed;
    private String age;
    private String gender;
    private String price;

    @Column(length = 2000)
    private String imageUrls;

    @Column(length = 2000)
    private String description;

    private boolean available = true;

    public Cat() {
    }

    public Cat(String name, String breed, String age, String gender,
               String price, String imageUrls, String description,
               boolean available) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.gender = gender;
        this.price = price;
        this.imageUrls = imageUrls;
        this.description = description;
        this.available = available;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getBreed() { return breed; }
    public String getAge() { return age; }
    public String getGender() { return gender; }
    public String getPrice() { return price; }
    public String getImageUrls() { return imageUrls; }
    public String getDescription() { return description; }
    public boolean isAvailable() { return available; }

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setBreed(String breed) { this.breed = breed; }
    public void setAge(String age) { this.age = age; }
    public void setGender(String gender) { this.gender = gender; }
    public void setPrice(String price) { this.price = price; }
    public void setImageUrls(String imageUrls) { this.imageUrls = imageUrls; }
    public void setDescription(String description) { this.description = description; }
    public void setAvailable(boolean available) { this.available = available; }
}
