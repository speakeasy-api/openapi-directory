package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateMultipartFormDataUserSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_prompt_language")
    public String audioPromptLanguage;
    public UpdateSettingTemplateMultipartFormDataUserSettings withAudioPromptLanguage(String audioPromptLanguage) {
        this.audioPromptLanguage = audioPromptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block_calls_without_caller_id")
    public Boolean blockCallsWithoutCallerId;
    public UpdateSettingTemplateMultipartFormDataUserSettings withBlockCallsWithoutCallerId(Boolean blockCallsWithoutCallerId) {
        this.blockCallsWithoutCallerId = blockCallsWithoutCallerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_handling")
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling callHandling;
    public UpdateSettingTemplateMultipartFormDataUserSettings withCallHandling(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling callHandling) {
        this.callHandling = callHandling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desk_phone")
    public UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone deskPhone;
    public UpdateSettingTemplateMultipartFormDataUserSettings withDeskPhone(UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone deskPhone) {
        this.deskPhone = deskPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hold_music")
    public UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum holdMusic;
    public UpdateSettingTemplateMultipartFormDataUserSettings withHoldMusic(UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum holdMusic) {
        this.holdMusic = holdMusic;
        return this;
    }
}