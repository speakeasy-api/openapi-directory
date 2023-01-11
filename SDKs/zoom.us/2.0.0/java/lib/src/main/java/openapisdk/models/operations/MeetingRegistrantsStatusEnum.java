package openapisdk.models.operations;


public enum MeetingRegistrantsStatusEnum {
    PENDING("pending"),
    APPROVED("approved"),
    DENIED("denied");

    public final String value;

    private MeetingRegistrantsStatusEnum(String value) {
        this.value = value;
    }
}
