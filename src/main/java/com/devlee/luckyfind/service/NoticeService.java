package com.devlee.luckyfind.service;

import com.devlee.luckyfind.model.Notice;

import java.util.List;

public interface NoticeService {
    List<Notice> getAllNotices();

    Notice createNotice(Notice notice);
}
