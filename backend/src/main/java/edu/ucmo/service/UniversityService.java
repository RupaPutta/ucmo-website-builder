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
}
