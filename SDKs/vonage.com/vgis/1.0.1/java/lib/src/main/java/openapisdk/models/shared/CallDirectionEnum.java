package openapisdk.models.shared;


public enum CallDirectionEnum {
    INBOUND("INBOUND"),
    OUTBOUND("OUTBOUND");

    public final String value;

    private CallDirectionEnum(String value) {
        this.value = value;
    }
}
