package com.devlee.luckyfind.entity;

import com.devlee.luckyfind.enums.NoticeCategory;
import com.devlee.luckyfind.model.NoticeDto;
import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "notice")
public class NoticeEntity extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;

    @Enumerated(EnumType.STRING)
    private NoticeCategory category;

    private String content;
    private String username;

    public NoticeEntity() {

    }

    public NoticeEntity(NoticeDto noticeDto){
        this.id = noticeDto.getId();
        this.title = noticeDto.getTitle();
        this.category = NoticeCategory.valueOf(String.valueOf(noticeDto.getCategory()).toUpperCase());
        this.content = noticeDto.getContent();
        this.username = noticeDto.getUsername();
    }




}
