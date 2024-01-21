package com.devlee.luckyfind.controller;

import com.devlee.luckyfind.model.Notice;
import com.devlee.luckyfind.service.NoticeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class NoticeController {

    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService) {
        this.noticeService = noticeService;
    }

    @GetMapping("/notices")
    public List<Notice> getAllNotices() {
        return noticeService.getAllNotices();
    }

    @PostMapping("/notices")
    public Notice createNotice(@RequestBody Notice notice) {
        return noticeService.createNotice(notice);
    }
}
