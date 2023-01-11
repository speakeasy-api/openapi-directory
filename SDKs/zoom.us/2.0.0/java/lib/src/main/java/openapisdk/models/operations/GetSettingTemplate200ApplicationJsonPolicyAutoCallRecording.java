package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_calls")
    public String recordingCalls;
    public GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording withRecordingCalls(String recordingCalls) {
        this.recordingCalls = recordingCalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_start_prompt")
    public Boolean recordingStartPrompt;
    public GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording withRecordingStartPrompt(Boolean recordingStartPrompt) {
        this.recordingStartPrompt = recordingStartPrompt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_transcription")
    public Boolean recordingTranscription;
    public GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording withRecordingTranscription(Boolean recordingTranscription) {
        this.recordingTranscription = recordingTranscription;
        return this;
    }
}