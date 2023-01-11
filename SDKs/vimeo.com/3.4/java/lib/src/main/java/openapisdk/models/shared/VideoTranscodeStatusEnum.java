package openapisdk.models.shared;


public enum VideoTranscodeStatusEnum {
    COMPLETE("complete"),
    ERROR("error"),
    IN_PROGRESS("in_progress");

    public final String value;

    private VideoTranscodeStatusEnum(String value) {
        this.value = value;
    }
}
