package openapisdk.models.shared;


public enum TimesheetStatusEnum {
    DRAFT("DRAFT"),
    PROCESSED("PROCESSED"),
    APPROVED("APPROVED"),
    REJECTED("REJECTED"),
    REQUESTED("REQUESTED");

    public final String value;

    private TimesheetStatusEnum(String value) {
        this.value = value;
    }
}
