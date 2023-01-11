package openapisdk.models.operations;


public enum MeetingsTypeEnum {
    SCHEDULED("scheduled"),
    LIVE("live"),
    UPCOMING("upcoming");

    public final String value;

    private MeetingsTypeEnum(String value) {
        this.value = value;
    }
}
