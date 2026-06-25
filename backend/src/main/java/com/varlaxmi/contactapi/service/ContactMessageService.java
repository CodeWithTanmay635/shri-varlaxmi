package com.varlaxmi.contactapi.service;

import com.varlaxmi.contactapi.model.ContactMessage;
import com.varlaxmi.contactapi.model.MessageStatus;
import com.varlaxmi.contactapi.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ContactMessageService {

    private final ContactMessageRepository repository;
    private final NotificationService notificationService;

    @Transactional
    public ContactMessage submitMessage(ContactMessage message) {
        message.setStatus(MessageStatus.NEW);
        ContactMessage savedMessage = repository.save(message);
        log.info("New contact message submitted: {}", savedMessage.getId());
        
        // Trigger async notification
        notificationService.sendNotificationAsync(savedMessage);
        
        return savedMessage;
    }

    @Transactional(readOnly = true)
    public Page<ContactMessage> getMessages(MessageStatus status, Pageable pageable) {
        if (status != null) {
            return repository.findByStatus(status, pageable);
        }
        return repository.findAll(pageable);
    }

    @Transactional
    public ContactMessage updateStatus(Long id, MessageStatus newStatus) {
        ContactMessage message = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Message not found"));
        
        message.setStatus(newStatus);
        return repository.save(message);
    }
}
