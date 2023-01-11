package openapisdk.models.operations;


public enum WebinarPollCreatePollStatusEnum {
    NOTSTART("notstart"),
    STARTED("started"),
    ENDED("ended"),
    SHARING("sharing");

    public final String value;

    private WebinarPollCreatePollStatusEnum(String value) {
        this.value = value;
    }
}
