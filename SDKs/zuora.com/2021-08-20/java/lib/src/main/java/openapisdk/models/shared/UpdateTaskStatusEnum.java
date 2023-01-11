package openapisdk.models.shared;


public enum UpdateTaskStatusEnum {
    QUEUED("Queued"),
    PROCESSING("Processing"),
    PENDING("Pending"),
    SUCCESS("Success"),
    STOPPED("Stopped"),
    ERROR("Error");

    public final String value;

    private UpdateTaskStatusEnum(String value) {
        this.value = value;
    }
}
