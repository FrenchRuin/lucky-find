package com.devlee.luckyfind.entity;

import com.devlee.luckyfind.model.Notice;
import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "notice")
public class NoticeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String category;
    private String content;
    private String username;

    public void entityToDto(Notice notice) {
        this.id = notice.getId();
        this.title = notice.getTitle();
        this.category = notice.getCategory();
        this.content = notice.getContent();
        this.username = notice.getUsername();
    }

}
