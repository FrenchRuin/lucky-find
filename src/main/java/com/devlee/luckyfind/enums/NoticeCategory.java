package com.devlee.luckyfind.enums;

import lombok.Getter;

@Getter
public enum NoticeCategory {

    NOTICE("notice"),
    INFO("info");

    private final String value;

    NoticeCategory(String value) {
        this.value = value;
    }
}
