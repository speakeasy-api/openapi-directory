package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_calls")
    public UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum recordingCalls;
    public UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording withRecordingCalls(UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum recordingCalls) {
        this.recordingCalls = recordingCalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_start_prompt")
    public Boolean recordingStartPrompt;
    public UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording withRecordingStartPrompt(Boolean recordingStartPrompt) {
        this.recordingStartPrompt = recordingStartPrompt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_transcription")
    public Boolean recordingTranscription;
    public UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording withRecordingTranscription(Boolean recordingTranscription) {
        this.recordingTranscription = recordingTranscription;
        return this;
    }
}