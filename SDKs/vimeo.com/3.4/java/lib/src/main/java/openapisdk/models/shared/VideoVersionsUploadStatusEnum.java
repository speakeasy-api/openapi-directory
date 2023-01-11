package openapisdk.models.shared;


public enum VideoVersionsUploadStatusEnum {
    COMPLETE("complete"),
    ERROR("error"),
    IN_PROGRESS("in_progress");

    public final String value;

    private VideoVersionsUploadStatusEnum(String value) {
        this.value = value;
    }
}
