package openapisdk.models.shared;


public enum VideoUploadStatusEnum {
    COMPLETE("complete"),
    ERROR("error"),
    IN_PROGRESS("in_progress");

    public final String value;

    private VideoUploadStatusEnum(String value) {
        this.value = value;
    }
}
