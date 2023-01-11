package openapisdk.models.operations;


public enum WebinarPollGetPollStatusEnum {
    NOTSTART("notstart"),
    STARTED("started"),
    ENDED("ended"),
    SHARING("sharing");

    public final String value;

    private WebinarPollGetPollStatusEnum(String value) {
        this.value = value;
    }
}
