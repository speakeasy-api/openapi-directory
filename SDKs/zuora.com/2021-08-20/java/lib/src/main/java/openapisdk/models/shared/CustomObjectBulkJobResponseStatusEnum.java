package openapisdk.models.shared;


public enum CustomObjectBulkJobResponseStatusEnum {
    OPEN("open"),
    PENDING("pending"),
    IN_PROGRESS("in_progress"),
    COMPLETED("completed"),
    FAILED("failed"),
    CANCELLED("cancelled");

    public final String value;

    private CustomObjectBulkJobResponseStatusEnum(String value) {
        this.value = value;
    }
}
