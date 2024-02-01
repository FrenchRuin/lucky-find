package com.devlee.luckyfind.service;

import com.devlee.luckyfind.entity.NoticeEntity;
import com.devlee.luckyfind.exception.UserAlreadyExistException;
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
        NoticeEntity noticeEntity = NoticeEntity.builder()
                .category(noticeDto.getCategory())
                .content(noticeDto.getContent())
                .title(noticeDto.getTitle())
                .username(noticeDto.getUsername())
                .build();
        noticeRepository.save(noticeEntity);
        return noticeDto;
    }

    @Override
    public void deleteNotice(Long id) {
        noticeRepository.deleteById(id);
    }

    @Override
    public NoticeDto updateNotice(Long id, NoticeDto noticeDto) {

        System.out.println(noticeDto.toString());

        noticeRepository.findById(id).ifPresentOrElse(notice -> {
            NoticeEntity newNotice = NoticeEntity.builder()
                    .id(notice.getId())
                    .title(noticeDto.getTitle())
                    .content(noticeDto.getContent())
                    .category(notice.getCategory())
                    .build();
            noticeRepository.save(newNotice);
        }, () -> {
            throw new UserAlreadyExistException(id + "는 존재하지 않는 사용자입니다.");
        });

        return noticeDto;
    }
}
