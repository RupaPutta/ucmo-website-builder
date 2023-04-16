package edu.ucmo.service;

import edu.ucmo.domain.University;
import edu.ucmo.repository.UniversityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UniversityService {
    private final UniversityRepository universityRepository;

    @Transactional
    public University create(University university){
        return universityRepository.save(university);
    }

    public University updateUniversityById(int universityId, University university) {
        University universityDB = universityRepository.findById(universityId).get();

        if(Objects.nonNull(university.getName()) &&
                !"".equalsIgnoreCase(university.getName())) {
            universityDB.setName(university.getName());
        }

        if(Objects.nonNull(university.getEmail()) &&
                !"".equalsIgnoreCase(university.getEmail())) {
            universityDB.setEmail(university.getEmail());
        }

        if(Objects.nonNull(university.getAddress()) &&
                !"".equalsIgnoreCase(university.getAddress())) {
            universityDB.setAddress(university.getAddress());
        }

        return universityRepository.save(universityDB);
    }

    public void deleteUniversityById(int universityId) {
        universityRepository.deleteById(universityId);
    }

    public University fetchUniversityById(int universityId) throws Exception {
        Optional<University> department = universityRepository.findById(universityId);

        if(!department.isPresent()) {
            throw new Exception("University not available!!");
        }

        return department.get();
    }
}
