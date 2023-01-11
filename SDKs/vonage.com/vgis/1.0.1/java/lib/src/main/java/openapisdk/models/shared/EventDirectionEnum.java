package openapisdk.models.shared;


public enum EventDirectionEnum {
    INBOUND("INBOUND"),
    OUTBOUND("OUTBOUND");

    public final String value;

    private EventDirectionEnum(String value) {
        this.value = value;
    }
}
