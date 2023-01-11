package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_file")
    public Boolean audioFile;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings withAudioFile(Boolean audioFile) {
        this.audioFile = audioFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cc_transcript_file")
    public Boolean ccTranscriptFile;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings withCcTranscriptFile(Boolean ccTranscriptFile) {
        this.ccTranscriptFile = ccTranscriptFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_file")
    public Boolean chatFile;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings withChatFile(Boolean chatFile) {
        this.chatFile = chatFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_with_sender_email")
    public Boolean chatWithSenderEmail;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings withChatWithSenderEmail(Boolean chatWithSenderEmail) {
        this.chatWithSenderEmail = chatWithSenderEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_file")
    public Boolean videoFile;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsRecordingArchiveSettings withVideoFile(Boolean videoFile) {
        this.videoFile = videoFile;
        return this;
    }
}