package openapisdk.models.shared;


public enum AccountClassificationEnum {
    OTHER("OTHER"),
    PERSONAL("PERSONAL"),
    CORPORATE("CORPORATE"),
    SMALL_BUSINESS("SMALL_BUSINESS"),
    TRUST("TRUST"),
    ADD_ON_CARD("ADD_ON_CARD"),
    VIRTUAL_CARD("VIRTUAL_CARD");

    public final String value;

    private AccountClassificationEnum(String value) {
        this.value = value;
    }
}
