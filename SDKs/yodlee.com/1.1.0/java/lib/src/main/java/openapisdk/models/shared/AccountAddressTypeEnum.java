package openapisdk.models.shared;


public enum AccountAddressTypeEnum {
    HOME("HOME"),
    BUSINESS("BUSINESS"),
    POBOX("POBOX"),
    RETAIL("RETAIL"),
    OFFICE("OFFICE"),
    SMALL_BUSINESS("SMALL_BUSINESS"),
    COMMUNICATION("COMMUNICATION"),
    PERMANENT("PERMANENT"),
    STATEMENT_ADDRESS("STATEMENT_ADDRESS"),
    PAYMENT("PAYMENT"),
    PAYOFF("PAYOFF"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private AccountAddressTypeEnum(String value) {
        this.value = value;
    }
}
