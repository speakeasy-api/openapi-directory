package openapisdk.models.operations;


public enum MeetingPollGetPollStatusEnum {
    NOTSTART("notstart"),
    STARTED("started"),
    ENDED("ended"),
    SHARING("sharing");

    public final String value;

    private MeetingPollGetPollStatusEnum(String value) {
        this.value = value;
    }
}
