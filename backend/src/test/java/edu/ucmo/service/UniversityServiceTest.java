package edu.ucmo.service;

import edu.ucmo.domain.University;
import edu.ucmo.repository.UniversityRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class UniversityServiceTest {
    @Autowired
    UniversityRepository universityRepository;
    @Autowired UniversityService universityService;

    @Test
    void create() {
        // ~ given:
        University university = new University();
        university.setId(1);
        university.setName("University of Central Missouri");
        university.setAddress("Warrensburg, MO");
        university.setEmail("admit@ucmo.edu");
        // ~ when:
        universityService.create(university);
        // ~ then:
        University result = universityService.getUniversityById(university.getId());
        assertEquals(university, result);
    }
}
