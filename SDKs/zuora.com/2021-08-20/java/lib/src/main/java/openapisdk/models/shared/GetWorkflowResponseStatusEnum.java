package openapisdk.models.shared;


public enum GetWorkflowResponseStatusEnum {
    QUEUED("Queued"),
    PROCESSING("Processing"),
    STOPPING("Stopping"),
    STOPPED("Stopped"),
    FINISHED("Finished");

    public final String value;

    private GetWorkflowResponseStatusEnum(String value) {
        this.value = value;
    }
}
