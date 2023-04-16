package edu.ucmo.controller;

import edu.ucmo.domain.University;
import edu.ucmo.service.UniversityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class UniversityController {
    private final UniversityService universityService;

    @CrossOrigin
    @PostMapping("/university")
    public ResponseEntity<?> save(@RequestBody University university) {
        System.out.println("University ID: " + university.getId());
        System.out.println("University Name: " + university.getName());
        System.out.println("University Address: " + university.getAddress());
        System.out.println("University Email: " + university.getEmail());
        return new ResponseEntity<>(universityService.create(university), HttpStatus.CREATED);
    }

    @CrossOrigin
    @GetMapping("/university/{id}")
    public University getUniversityById(@PathVariable("id") Integer id) {
        System.out.println("University ID: " + id);
        return universityService.getUniversityById(id);
    }

    @CrossOrigin
    @PutMapping("/university/{id}")
    public ResponseEntity<?> updateUniversityById(@PathVariable Integer id, @RequestBody University university) {
        return new ResponseEntity<>(universityService.updateUniversityById(id, university), HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping("/university/{id}")
    public ResponseEntity<?> deleteUniversityById(@PathVariable Integer id) {
        return new ResponseEntity<>(universityService.deleteUniversityById(id), HttpStatus.OK);
    }
}
