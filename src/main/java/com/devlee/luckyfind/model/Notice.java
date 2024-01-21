package com.devlee.luckyfind.model;

import com.devlee.luckyfind.entity.NoticeEntity;
import lombok.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Notice {

    private Long id;
    private String title;
    private String content;
    private String category;
    private String username;

    public Notice(NoticeEntity noticeEntity) {
        this.id = noticeEntity.getId();
        this.username = noticeEntity.getUsername();
        this.content = noticeEntity.getContent();
        this.title = noticeEntity.getTitle();
        this.category = noticeEntity.getCategory();
    }
}
