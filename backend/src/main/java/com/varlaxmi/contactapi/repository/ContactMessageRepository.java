package com.varlaxmi.contactapi.repository;

import com.varlaxmi.contactapi.model.ContactMessage;
import com.varlaxmi.contactapi.model.MessageStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
    Page<ContactMessage> findByStatus(MessageStatus status, Pageable pageable);
}
