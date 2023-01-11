package openapisdk.models.operations;


public enum GetJobStatusAndResponse200ApplicationJsonStatusEnum {
    PROCESSING("Processing"),
    FAILED("Failed"),
    COMPLETED("Completed");

    public final String value;

    private GetJobStatusAndResponse200ApplicationJsonStatusEnum(String value) {
        this.value = value;
    }
}
