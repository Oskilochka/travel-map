package com.map.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "results not found")
public class NotFoundException extends Exception { // RuntimeException
    public NotFoundException(String message) {
        super(message);
    }
}
