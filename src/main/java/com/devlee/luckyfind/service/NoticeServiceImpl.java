package com.devlee.luckyfind.service;

import com.devlee.luckyfind.entity.NoticeEntity;
import com.devlee.luckyfind.model.Notice;
import com.devlee.luckyfind.repository.NoticeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NoticeServiceImpl implements NoticeService {

    private final NoticeRepository noticeRepository;

    public NoticeServiceImpl(NoticeRepository noticeRepository) {
        this.noticeRepository = noticeRepository;
    }

    @Override
    public List<Notice> getAllNotices() {
        List<NoticeEntity> noticeEntityList = noticeRepository.findAll();
        return noticeEntityList.stream().map(Notice::new).toList();
    }

    @Override
    public Notice createNotice(Notice notice) {
        NoticeEntity noticeEntity = new NoticeEntity();
        noticeEntity.entityToDto(notice);
        noticeRepository.save(noticeEntity);
        return notice;
    }
}
