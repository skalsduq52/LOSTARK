package org.lostark.characterinfo.vo.gem;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class ArmoryGem {
    private List<Gems> gems;
    private Effects effects;
}
