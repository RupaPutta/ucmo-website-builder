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
    public ResponseEntity<?> save(@RequestBody University university){
        return new ResponseEntity<>(universityService.create(university), HttpStatus.CREATED);
    }

    @CrossOrigin
    @GetMapping("/university/{id}")
    public University getUniversityById(@PathVariable("id") Integer id) {
        return universityService.getUniversityById(id);
    }

    @CrossOrigin
    @PutMapping("/university")
    public ResponseEntity<?> updateUniversityById(@RequestBody University university) {
        return new ResponseEntity<>(universityService.updateUniversityById(university), HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping("/university")
    public ResponseEntity<?> deleteUniversityById(@RequestBody University university) {
        return new ResponseEntity<>(universityService.deleteUniversityById(university), HttpStatus.OK);
    }
}
