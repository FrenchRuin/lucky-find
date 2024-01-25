package com.devlee.luckyfind.model;

import com.devlee.luckyfind.entity.NoticeEntity;
import com.devlee.luckyfind.enums.NoticeCategory;
import jakarta.persistence.Enumerated;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class NoticeDto {

    private Long id;
    private String title;
    private String content;
    private NoticeCategory category;
    private String username;

    public NoticeDto(NoticeEntity noticeEntity) {
        this.id = noticeEntity.getId();
        this.username = noticeEntity.getUsername();
        this.content = noticeEntity.getContent();
        this.title = noticeEntity.getTitle();
        this.category = NoticeCategory.valueOf(String.valueOf(noticeEntity.getCategory()).toUpperCase());
    }
}
