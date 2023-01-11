package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupSettings200ApplicationJson1RecordingArchiveSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_file")
    public Boolean audioFile;
    public GetGroupSettings200ApplicationJson1RecordingArchiveSettings withAudioFile(Boolean audioFile) {
        this.audioFile = audioFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cc_transcript_file")
    public Boolean ccTranscriptFile;
    public GetGroupSettings200ApplicationJson1RecordingArchiveSettings withCcTranscriptFile(Boolean ccTranscriptFile) {
        this.ccTranscriptFile = ccTranscriptFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_file")
    public Boolean chatFile;
    public GetGroupSettings200ApplicationJson1RecordingArchiveSettings withChatFile(Boolean chatFile) {
        this.chatFile = chatFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_with_sender_email")
    public Boolean chatWithSenderEmail;
    public GetGroupSettings200ApplicationJson1RecordingArchiveSettings withChatWithSenderEmail(Boolean chatWithSenderEmail) {
        this.chatWithSenderEmail = chatWithSenderEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_file")
    public Boolean videoFile;
    public GetGroupSettings200ApplicationJson1RecordingArchiveSettings withVideoFile(Boolean videoFile) {
        this.videoFile = videoFile;
        return this;
    }
}