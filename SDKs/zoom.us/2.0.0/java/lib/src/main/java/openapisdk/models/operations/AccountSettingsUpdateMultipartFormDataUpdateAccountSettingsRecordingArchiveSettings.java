package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_file")
    public Boolean audioFile;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings withAudioFile(Boolean audioFile) {
        this.audioFile = audioFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cc_transcript_file")
    public Boolean ccTranscriptFile;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings withCcTranscriptFile(Boolean ccTranscriptFile) {
        this.ccTranscriptFile = ccTranscriptFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_file")
    public Boolean chatFile;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings withChatFile(Boolean chatFile) {
        this.chatFile = chatFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_with_sender_email")
    public Boolean chatWithSenderEmail;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings withChatWithSenderEmail(Boolean chatWithSenderEmail) {
        this.chatWithSenderEmail = chatWithSenderEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_file")
    public Boolean videoFile;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchiveSettings withVideoFile(Boolean videoFile) {
        this.videoFile = videoFile;
        return this;
    }
}