package com.map.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {
    private String username;
    private String password;

    private boolean isUsernameValid() {
        return username != null && username.length() >= 5 && username.length() <= 25;
    }

    private boolean isPasswordValid() {
        return password != null && password.length() >= 8 && password.matches(".*\\d.*");
    }

    public boolean isValid() {
        boolean isPassValid = isPasswordValid();
        boolean isNameValid = isUsernameValid();
        return isPassValid && isNameValid;
    }
}
