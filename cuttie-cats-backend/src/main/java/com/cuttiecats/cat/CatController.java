
package com.cuttiecats.cat;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cats")
public class CatController {

    private final CatRepository repository;

    public CatController(CatRepository repository) {
        this.repository = repository;
    }

    private Map<String, Object> toResponse(Cat cat) {
        List<String> images = cat.getImageUrls() == null
                ? List.of()
                : Arrays.stream(cat.getImageUrls().split(","))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .toList();

        return Map.of(
                "id", cat.getId(),
                "name", cat.getName(),
                "breed", cat.getBreed() == null ? "" : cat.getBreed(),
                "age", cat.getAge() == null ? "" : cat.getAge(),
                "gender", cat.getGender() == null ? "" : cat.getGender(),
                "price", cat.getPrice() == null ? "Contact us" : cat.getPrice(),
                "image", images.isEmpty() ? "" : images.get(0),
                "images", images,
                "description", cat.getDescription() == null ? "" : cat.getDescription(),
                "available", cat.isAvailable()
        );
    }

    @GetMapping
    public List<Map<String, Object>> getAvailableCats() {
        return repository.findByAvailableTrue()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    @GetMapping("/{id}")
    public Map<String, Object> getCatById(@PathVariable Long id) {
        Cat cat = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Cat not found"));
        return toResponse(cat);
    }
}
