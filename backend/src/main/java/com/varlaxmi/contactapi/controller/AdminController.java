package com.varlaxmi.contactapi.controller;

import com.varlaxmi.contactapi.model.ContactMessage;
import com.varlaxmi.contactapi.model.MessageStatus;
import com.varlaxmi.contactapi.service.ContactMessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/contact")
@RequiredArgsConstructor
public class AdminController {

    private final ContactMessageService contactMessageService;

    @GetMapping
    public ResponseEntity<Page<ContactMessage>> getMessages(
            @RequestParam(required = false) MessageStatus status,
            Pageable pageable) {
        return ResponseEntity.ok(contactMessageService.getMessages(status, pageable));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ContactMessage> updateStatus(
            @PathVariable Long id,
            @RequestParam MessageStatus status) {
        return ResponseEntity.ok(contactMessageService.updateStatus(id, status));
    }
}
