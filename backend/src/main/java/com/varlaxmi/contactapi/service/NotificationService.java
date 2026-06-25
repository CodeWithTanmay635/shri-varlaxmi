package com.varlaxmi.contactapi.service;

import com.varlaxmi.contactapi.model.ContactMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class NotificationService {

    private final JavaMailSender mailSender;

    @Value("${app.notification.recipient}")
    private String recipientEmail;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Async
    public void sendNotificationAsync(ContactMessage message) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            helper.setTo(recipientEmail);
            helper.setFrom(fromEmail);
            helper.setReplyTo(message.getEmail());
            helper.setSubject("New Inquiry: " + message.getSubject());
            helper.setText(buildEmailBody(message), true);

            mailSender.send(mimeMessage);
            log.info("Email notification sent for message ID: {} to {}", message.getId(), recipientEmail);
        } catch (MessagingException | MailException e) {
            log.error("Failed to send email notification for message ID: {}", message.getId(), e);
        }
    }

    private String buildEmailBody(ContactMessage message) {
        return """
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafafa; border-radius: 12px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #1a1a1a 0%%, #2d2d2d 100%%); padding: 32px; text-align: center;">
                    <h1 style="color: #C8A55A; margin: 0; font-size: 22px; font-weight: 400; letter-spacing: 2px;">
                        SHRI VARALAKSHMI
                    </h1>
                    <p style="color: #999; margin: 8px 0 0; font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">
                        New Showroom Inquiry
                    </p>
                </div>
                <div style="padding: 32px; background: #ffffff;">
                    <table style="width: 100%%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">
                                Name
                            </td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 14px;">
                                %s
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
                                Email
                            </td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 14px;">
                                <a href="mailto:%s" style="color: #C8A55A; text-decoration: none;">%s</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
                                Subject
                            </td>
                            <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333; font-size: 14px;">
                                %s
                            </td>
                        </tr>
                    </table>
                    <div style="margin-top: 24px; padding: 20px; background: #f9f9f9; border-radius: 8px; border-left: 3px solid #C8A55A;">
                        <p style="color: #999; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">
                            Message
                        </p>
                        <p style="color: #333; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">%s</p>
                    </div>
                </div>
                <div style="padding: 20px 32px; background: #f5f5f5; text-align: center;">
                    <p style="color: #aaa; font-size: 11px; margin: 0;">
                        This email was sent from the Shri Varalakshmi website contact form.
                    </p>
                </div>
            </div>
            """.formatted(
                message.getName(),
                message.getEmail(), message.getEmail(),
                message.getSubject(),
                message.getMessage()
        );
    }
}
