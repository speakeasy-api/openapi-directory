package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_start_prompt")
    public Boolean recordingStartPrompt;
    public UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording withRecordingStartPrompt(Boolean recordingStartPrompt) {
        this.recordingStartPrompt = recordingStartPrompt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_transcription")
    public Boolean recordingTranscription;
    public UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording withRecordingTranscription(Boolean recordingTranscription) {
        this.recordingTranscription = recordingTranscription;
        return this;
    }
}