package openapisdk.models.operations;


public enum GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum {
    SHARED_SCREEN_WITH_SPEAKER_VIEW_CC("shared_screen_with_speaker_view(CC)"),
    SHARED_SCREEN_WITH_SPEAKER_VIEW("shared_screen_with_speaker_view"),
    SHARED_SCREEN_WITH_GALLERY_VIEW("shared_screen_with_gallery_view"),
    ACTIVE_SPEAKER("active_speaker"),
    GALLERY_VIEW("gallery_view"),
    SHARED_SCREEN("shared_screen"),
    AUDIO_ONLY("audio_only"),
    AUDIO_TRANSCRIPT("audio_transcript"),
    CHAT_FILE("chat_file"),
    POLL("poll"),
    HOST_VIDEO("host_video"),
    CLOSED_CAPTION("closed_caption"),
    TIMELINE("timeline"),
    THUMBNAIL("thumbnail");

    public final String value;

    private GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum(String value) {
        this.value = value;
    }
}
