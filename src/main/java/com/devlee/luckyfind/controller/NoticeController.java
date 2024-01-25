package com.devlee.luckyfind.controller;

import com.devlee.luckyfind.model.NoticeDto;
import com.devlee.luckyfind.service.NoticeService;
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
    public List<NoticeDto> getAllNotices() {
        return noticeService.getAllNotices();
    }

    @PostMapping("/notices")
    public NoticeDto createNotice(@RequestBody NoticeDto noticeDto) {
        return noticeService.createNotice(noticeDto);
    }

    @DeleteMapping("/notices/{id}")
    public void deleteNotice(@PathVariable Long id) {
        noticeService.deleteNotice(id);
    }
}
