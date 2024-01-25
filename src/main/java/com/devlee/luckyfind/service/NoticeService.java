package com.devlee.luckyfind.service;

import com.devlee.luckyfind.model.NoticeDto;

import java.util.List;

public interface NoticeService {
    List<NoticeDto> getAllNotices();

    NoticeDto createNotice(NoticeDto noticeDto);

    void deleteNotice(Long id);
}
