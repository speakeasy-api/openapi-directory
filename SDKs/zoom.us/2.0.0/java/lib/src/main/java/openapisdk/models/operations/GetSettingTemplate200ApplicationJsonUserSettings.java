package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSettingTemplate200ApplicationJsonUserSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_prompt_language")
    public String audioPromptLanguage;
    public GetSettingTemplate200ApplicationJsonUserSettings withAudioPromptLanguage(String audioPromptLanguage) {
        this.audioPromptLanguage = audioPromptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block_calls_without_caller_id")
    public Boolean blockCallsWithoutCallerId;
    public GetSettingTemplate200ApplicationJsonUserSettings withBlockCallsWithoutCallerId(Boolean blockCallsWithoutCallerId) {
        this.blockCallsWithoutCallerId = blockCallsWithoutCallerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_handling")
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandling callHandling;
    public GetSettingTemplate200ApplicationJsonUserSettings withCallHandling(GetSettingTemplate200ApplicationJsonUserSettingsCallHandling callHandling) {
        this.callHandling = callHandling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desk_phone")
    public GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone deskPhone;
    public GetSettingTemplate200ApplicationJsonUserSettings withDeskPhone(GetSettingTemplate200ApplicationJsonUserSettingsDeskPhone deskPhone) {
        this.deskPhone = deskPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hold_music")
    public GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum holdMusic;
    public GetSettingTemplate200ApplicationJsonUserSettings withHoldMusic(GetSettingTemplate200ApplicationJsonUserSettingsHoldMusicEnum holdMusic) {
        this.holdMusic = holdMusic;
        return this;
    }
}