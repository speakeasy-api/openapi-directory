package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSettingTemplate200ApplicationJsonPolicyVoicemail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_transcription")
    public Boolean allowTranscription;
    public GetSettingTemplate200ApplicationJsonPolicyVoicemail withAllowTranscription(Boolean allowTranscription) {
        this.allowTranscription = allowTranscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public GetSettingTemplate200ApplicationJsonPolicyVoicemail withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
}