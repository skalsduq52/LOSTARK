package org.lostark.characterinfo.vo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;
import org.lostark.characterinfo.vo.arkPassive.ArkPassive;
import org.lostark.characterinfo.vo.card.ArmoryCard;
import org.lostark.characterinfo.vo.engraving.ArmoryEngraving;
import org.lostark.characterinfo.vo.equipment.ArmoryEquipment;
import org.lostark.characterinfo.vo.gem.ArmoryGem;
import org.lostark.characterinfo.vo.profile.ArmoryProfile;

import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class LoaCharacter {
    private ArmoryProfile armoryProfile;
    private List<ArmoryEquipment> armoryEquipment;
    private ArmoryEngraving armoryEngraving;
    private ArmoryGem armoryGem;
    private ArmoryCard armoryCard;
    private ArkPassive arkPassive;


}
