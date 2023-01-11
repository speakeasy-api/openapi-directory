package openapisdk.models.shared;


public enum PresetsSettingsOutroTypeEnum {
    LINK("link"),
    NO_IDEA("no idea"),
    TEXT("text"),
    UPLOADED_CLIPS("uploaded_clips"),
    UPLOADED_VIDEOS("uploaded_videos");

    public final String value;

    private PresetsSettingsOutroTypeEnum(String value) {
        this.value = value;
    }
}
