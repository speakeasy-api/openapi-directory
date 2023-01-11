package openapisdk.models.shared;


public enum WorkflowInstanceStatusEnum {
    QUEUED("Queued"),
    PROCESSING("Processing");

    public final String value;

    private WorkflowInstanceStatusEnum(String value) {
        this.value = value;
    }
}
