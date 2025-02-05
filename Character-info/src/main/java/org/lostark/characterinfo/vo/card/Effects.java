package org.lostark.characterinfo.vo.card;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown=true)
public class Effects {
    private List<Items> items;
}
