package openapisdk.models.shared;


public enum JobResultStatusEnum {
    COMPLETED("Completed"),
    PENDING("Pending");

    public final String value;

    private JobResultStatusEnum(String value) {
        this.value = value;
    }
}
