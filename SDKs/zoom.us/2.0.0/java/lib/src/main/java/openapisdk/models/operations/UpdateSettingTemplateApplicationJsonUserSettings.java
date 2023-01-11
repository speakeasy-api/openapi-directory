package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateApplicationJsonUserSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_prompt_language")
    public String audioPromptLanguage;
    public UpdateSettingTemplateApplicationJsonUserSettings withAudioPromptLanguage(String audioPromptLanguage) {
        this.audioPromptLanguage = audioPromptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block_calls_without_caller_id")
    public Boolean blockCallsWithoutCallerId;
    public UpdateSettingTemplateApplicationJsonUserSettings withBlockCallsWithoutCallerId(Boolean blockCallsWithoutCallerId) {
        this.blockCallsWithoutCallerId = blockCallsWithoutCallerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_handling")
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandling callHandling;
    public UpdateSettingTemplateApplicationJsonUserSettings withCallHandling(UpdateSettingTemplateApplicationJsonUserSettingsCallHandling callHandling) {
        this.callHandling = callHandling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desk_phone")
    public UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone deskPhone;
    public UpdateSettingTemplateApplicationJsonUserSettings withDeskPhone(UpdateSettingTemplateApplicationJsonUserSettingsDeskPhone deskPhone) {
        this.deskPhone = deskPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hold_music")
    public UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum holdMusic;
    public UpdateSettingTemplateApplicationJsonUserSettings withHoldMusic(UpdateSettingTemplateApplicationJsonUserSettingsHoldMusicEnum holdMusic) {
        this.holdMusic = holdMusic;
        return this;
    }
}