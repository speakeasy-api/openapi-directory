package openapisdk.models.shared;


public enum DataQueryJobQueryStatusEnum {
    SUBMITTED("submitted"),
    ACCEPTED("accepted"),
    IN_PROGRESS("in_progress"),
    COMPLETED("completed"),
    FAILED("failed"),
    CANCELLED("cancelled");

    public final String value;

    private DataQueryJobQueryStatusEnum(String value) {
        this.value = value;
    }
}
