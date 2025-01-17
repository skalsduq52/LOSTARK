package org.lostark.characterinfo.vo.gem;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Gem {
    private String name = "";
    private int count = 0;
    private double average = 0.0;

    public Gem(String name){
        this.name = name;
    }

}
