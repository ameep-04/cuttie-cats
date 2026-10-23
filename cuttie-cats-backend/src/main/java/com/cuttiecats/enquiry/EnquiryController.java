
package com.cuttiecats.enquiry;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@RequestMapping("/api/enquiries")
public class EnquiryController {

    private final EnquiryRepository repository;

    public EnquiryController(EnquiryRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Map<String, Object> createEnquiry(
            @Valid @RequestBody EnquiryRequest request) {

        try {
            Enquiry enquiry = new Enquiry();
            enquiry.setName(request.name().trim());
            enquiry.setPhone(request.phone().trim());
            enquiry.setEmail(request.email().trim());
            enquiry.setArea(request.area().trim());
            enquiry.setMessage(request.message().trim());

            Enquiry saved = repository.save(enquiry);

            return Map.of(
                    "success", true,
                    "message", "Enquiry submitted successfully",
                    "id", saved.getId()
            );
        } catch (Exception ex) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "Unable to save enquiry"
            );
        }
    }
}
