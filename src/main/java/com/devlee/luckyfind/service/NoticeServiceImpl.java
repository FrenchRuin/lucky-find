package com.devlee.luckyfind.service;

import com.devlee.luckyfind.entity.NoticeEntity;
import com.devlee.luckyfind.model.NoticeDto;
import com.devlee.luckyfind.repository.NoticeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoticeServiceImpl implements NoticeService {

    private final NoticeRepository noticeRepository;

    public NoticeServiceImpl(NoticeRepository noticeRepository) {
        this.noticeRepository = noticeRepository;
    }

    @Override
    public List<NoticeDto> getAllNotices() {
        List<NoticeEntity> noticeEntityList = noticeRepository.findAll();
        return noticeEntityList.stream().map(NoticeDto::new).toList();
    }

    @Override
    public NoticeDto createNotice(NoticeDto noticeDto) {
        NoticeEntity noticeEntity = new NoticeEntity(noticeDto);
        noticeRepository.save(noticeEntity);
        return noticeDto;
    }

    @Override
    public void deleteNotice(Long id) {
        noticeRepository.deleteById(id);
    }
}
