package openapisdk.models.operations;


public enum MeetingPollCreatePollStatusEnum {
    NOTSTART("notstart"),
    STARTED("started"),
    ENDED("ended"),
    SHARING("sharing");

    public final String value;

    private MeetingPollCreatePollStatusEnum(String value) {
        this.value = value;
    }
}
