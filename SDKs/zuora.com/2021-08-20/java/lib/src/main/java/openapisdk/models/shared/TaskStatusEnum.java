package openapisdk.models.shared;


public enum TaskStatusEnum {
    QUEUED("Queued"),
    PROCESSING("Processing"),
    PENDING("Pending"),
    SUCCESS("Success"),
    STOPPED("Stopped"),
    ERROR("Error");

    public final String value;

    private TaskStatusEnum(String value) {
        this.value = value;
    }
}
