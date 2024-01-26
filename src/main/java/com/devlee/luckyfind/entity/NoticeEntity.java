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
    @Column(name = "notice_id")
    private Long id;

    @Column
    private String title;

    @Enumerated(EnumType.STRING)
    private NoticeCategory category;

    @Column
    private String content;

    @Column
    private String username;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    public NoticeEntity() {

    }

    public NoticeEntity(NoticeDto noticeDto) {
        this.id = noticeDto.getId();
        this.title = noticeDto.getTitle();
        this.category = NoticeCategory.valueOf(String.valueOf(noticeDto.getCategory()).toUpperCase());
        this.content = noticeDto.getContent();
        this.username = noticeDto.getUsername();
    }


}
