
package com.cuttiecats.enquiry;

import jakarta.validation.constraints.*;

public record EnquiryRequest(
        @NotBlank @Size(min = 2, max = 100)
        String name,

        @NotBlank @Pattern(regexp = "^[+]?[0-9 ()-]{8,20}$")
        String phone,

        @NotBlank @Email @Size(max = 150)
        String email,

        @NotBlank @Size(max = 120)
        String area,

        @NotBlank @Size(min = 5, max = 2000)
        String message
) {
}
