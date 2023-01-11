package openapisdk.models.shared;


public enum AccountIdEnum {
    INBOUND("Inbound"),
    OUTBOUND("Outbound");

    public final String value;

    private AccountIdEnum(String value) {
        this.value = value;
    }
}
