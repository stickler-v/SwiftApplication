package com.swift.app.web.rest.vm;

import com.swift.app.service.dto.UserDTO;

/**
 * View Model extending the UserDTO, which is meant to be used in the user management UI.
 */
public class ManagedUserVM extends UserDTO {

    public ManagedUserVM() {
        // Empty constructor needed for Jackson.
    }

    @Override
    public String toString() {
        return "ManagedUserVM{" +
            "} " + super.toString();
    }
}
