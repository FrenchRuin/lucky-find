package com.devlee.luckyfind.entity;

import com.devlee.luckyfind.enums.NoticeCategory;
import com.devlee.luckyfind.model.NoticeDto;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Entity
@Table(name = "notice")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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



    @Builder
    public NoticeEntity(Long id, String title, String content, String username, NoticeCategory category) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.content = content;
        this.username = username;
    }

}
