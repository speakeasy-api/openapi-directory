package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupSettingsApplicationJson1RecordingArchiveSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_file")
    public Boolean audioFile;
    public UpdateGroupSettingsApplicationJson1RecordingArchiveSettings withAudioFile(Boolean audioFile) {
        this.audioFile = audioFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cc_transcript_file")
    public Boolean ccTranscriptFile;
    public UpdateGroupSettingsApplicationJson1RecordingArchiveSettings withCcTranscriptFile(Boolean ccTranscriptFile) {
        this.ccTranscriptFile = ccTranscriptFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_file")
    public Boolean chatFile;
    public UpdateGroupSettingsApplicationJson1RecordingArchiveSettings withChatFile(Boolean chatFile) {
        this.chatFile = chatFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_with_sender_email")
    public Boolean chatWithSenderEmail;
    public UpdateGroupSettingsApplicationJson1RecordingArchiveSettings withChatWithSenderEmail(Boolean chatWithSenderEmail) {
        this.chatWithSenderEmail = chatWithSenderEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_file")
    public Boolean videoFile;
    public UpdateGroupSettingsApplicationJson1RecordingArchiveSettings withVideoFile(Boolean videoFile) {
        this.videoFile = videoFile;
        return this;
    }
}