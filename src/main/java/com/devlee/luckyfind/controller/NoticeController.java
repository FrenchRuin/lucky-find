package com.devlee.luckyfind.controller;

import com.devlee.luckyfind.model.NoticeDto;
import com.devlee.luckyfind.service.NoticeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class NoticeController {

    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService) {
        this.noticeService = noticeService;
    }

    @GetMapping("/notices")
    public ResponseEntity<List<NoticeDto>> getAllNotices() {
        List<NoticeDto> notices = noticeService.getAllNotices();
        return ResponseEntity.ok(notices);
    }

    @PostMapping("/notices")
    public ResponseEntity<NoticeDto> createNotice(@RequestBody NoticeDto noticeDto) {
        NoticeDto notice = noticeService.createNotice(noticeDto);
        return ResponseEntity.ok(notice);
    }

    @DeleteMapping("/notices/{id}")
    public void deleteNotice(@PathVariable Long id) {
        noticeService.deleteNotice(id);
    }

    @PutMapping("/notices/{id}")
    public ResponseEntity<NoticeDto> updateNotice(@PathVariable Long id, @RequestBody NoticeDto noticeDto) {
        NoticeDto notice = noticeService.updateNotice(id, noticeDto);
        return ResponseEntity.ok(notice);
    }

}
