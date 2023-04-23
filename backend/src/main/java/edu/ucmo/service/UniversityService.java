package edu.ucmo.service;

import edu.ucmo.domain.University;
import edu.ucmo.repository.UniversityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class UniversityService {
    private final UniversityRepository universityRepository;

    @Transactional
    public University create(University university){
        return universityRepository.save(university);
    }

    @Transactional(readOnly = true)
    public University getUniversityById(Integer id) {
        return universityRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Check Id"));
    }

    @Transactional
    public University updateUniversityById(University university) {
        University universityObj = universityRepository.findById(university.getId())
                .orElseThrow(() -> new IllegalArgumentException("check Id"));
        universityObj.setName(university.getName());
        universityObj.setAddress(university.getAddress());
        universityObj.setEmail(university.getEmail());
        return universityObj;
    }

    @Transactional
    public String deleteUniversityById(Integer id) {
        universityRepository.deleteById(id);
        return "Successfully deleted the university.";
    }
}
