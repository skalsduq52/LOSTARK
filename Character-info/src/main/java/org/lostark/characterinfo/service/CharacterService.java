package org.lostark.characterinfo.service;

import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.lostark.characterinfo.vo.CharacterInfo;
import org.lostark.characterinfo.vo.LoaCharacter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

@Service
public class CharacterService {

    @Value("${lostark.api-key}")
    private String API_KEY;


    public CharacterInfo getUser(String characterName) throws IOException, InterruptedException {

        LoaCharacter character = new LoaCharacter();

        characterName = URLEncoder.encode(characterName,"utf-8");
        CharacterInfo characterInfo = new CharacterInfo();

        String url = "https://developer-lostark.game.onstove.com/armories/characters/"+characterName;

        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Authorization","Bearer "+API_KEY)
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() == 200) {
            String jsonResponse = response.body();

            ObjectMapper objectMapper = new ObjectMapper().configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES,true);
            character = objectMapper.readValue(jsonResponse, LoaCharacter.class);

            if(character != null){

                // 장비 정보
                extArmoryEquipment(character);
                // 아크패시브 정보
                extArkPassive(character);
                // 각인 정보
                extEngraving(character);
                // 카드 정보
                extArmoryCard(character);
                // 보석 정보
                extArmoryGem(character);

                viewCharacter.setCharacterInfo(characterInfo);
                // 초월 정보 세팅
                viewCharacter.setTranscendence(transcendence);
                // 전체 캐릭터 정보 세팅
                viewCharacter.setLoaCharacter(character);

                viewCharacter.setFlagSuccess(true);
            }else{
                viewCharacter = new ViewCharacter();
            }

        }else{
            throw new IOException("네트워크 오류");
        }

        return characterInfo;
    }
}
