package openapisdk.models.operations;


public enum WebinarRegistrantsStatusEnum {
    PENDING("pending"),
    APPROVED("approved"),
    DENIED("denied");

    public final String value;

    private WebinarRegistrantsStatusEnum(String value) {
        this.value = value;
    }
}
