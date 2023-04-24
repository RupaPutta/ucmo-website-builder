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

    @Test
    void search() {
        // ~ given:
        Integer id = 1;
        // ~ when:
        University result = universityService.getUniversityById(id);
        // ~ then:
        assertEquals(1, result.getId());
        assertEquals("University of Central Missouri", result.getName());
        assertEquals("Warrensburg, MO", result.getAddress());
        assertEquals("admit@ucmo.edu", result.getEmail());
    }

    @Test
    void update() {
        // ~ given:
        University university = new University();
        university.setId(1);
        university.setName("Arizona State University");
        university.setAddress("Phoenix, AZ");
        university.setEmail("admit@asu.edu");
        // ~ when:
        University result = universityService.updateUniversityById(university);
        // ~ then:
        assertEquals(university, result);
    }

    @Test
    void delete() {
        // ~ given:
        University university = new University();
        university.setId(2);
        university.setName("University of Central Missouri");
        university.setAddress("Warrensburg, MO");
        university.setEmail("admit@ucmo.edu");

        universityService.create(university);
        // ~ when:
        String result = universityService.deleteUniversityById(university);
        // ~ then:
        assertEquals("Successfully deleted the university.", result);
    }
}
