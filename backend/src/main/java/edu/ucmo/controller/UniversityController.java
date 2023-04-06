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
        System.out.println("University Name: " + university.getName());
        System.out.println("University Address: " + university.getAddress());
        System.out.println("University Email" + university.getEmail());
        return new ResponseEntity<>(universityService.create(university), HttpStatus.CREATED);
    }
}
