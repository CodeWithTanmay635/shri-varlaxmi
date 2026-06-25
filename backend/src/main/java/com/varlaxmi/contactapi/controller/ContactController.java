package com.varlaxmi.contactapi.controller;

import com.varlaxmi.contactapi.model.ContactMessage;
import com.varlaxmi.contactapi.service.ContactMessageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactMessageService contactMessageService;

    @PostMapping
    public ResponseEntity<ContactMessage> submitMessage(@Valid @RequestBody ContactMessage message) {
        ContactMessage saved = contactMessageService.submitMessage(message);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
}
