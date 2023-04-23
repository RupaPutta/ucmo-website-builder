package edu.ucmo.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import edu.ucmo.domain.University;
import edu.ucmo.service.UniversityService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@ExtendWith(MockitoExtension.class)
public class UniversityControllerTest {
    @InjectMocks
    UniversityController universityController;

    @Mock
    UniversityService universityService;

    @Test
    public void testCreateUniversity() {
        MockHttpServletRequest request = new MockHttpServletRequest();
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));
        University university = new University();
        university.setId(1);
        university.setName("University of Central Missouri");
        university.setAddress("Warrensburg, MO");
        university.setEmail("admit@ucmo.edu");
        when(universityService.create(any(University.class))).thenReturn(university);
        ResponseEntity<?> responseEntity = universityController.save(university);
        assertThat(responseEntity.getStatusCodeValue()).isEqualTo(201);
    }

    @Test
    public void testUpdateUniversity() {
        University university = new University();
        university.setId(1);
        university.setName("Arizona State University");
        university.setAddress("Phoenix, AZ");
        university.setEmail("admit@asu.edu");
        ResponseEntity<?> responseEntity = universityController.updateUniversityById(university.getId(), university);
        assertThat(responseEntity.getStatusCodeValue()).isEqualTo(200);
    }

    @Test
    public void testDeleteUniversity() {
        University university = new University();
        university.setId(1);
        ResponseEntity<?> responseEntity = universityController.deleteUniversityById(university.getId());
        assertThat(responseEntity.getStatusCodeValue()).isEqualTo(200);
    }
}
