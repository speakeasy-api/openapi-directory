package openapisdk.models.shared;


public enum DataExtractsAccountClassificationEnum {
    OTHER("OTHER"),
    PERSONAL("PERSONAL"),
    CORPORATE("CORPORATE"),
    SMALL_BUSINESS("SMALL_BUSINESS"),
    TRUST("TRUST"),
    ADD_ON_CARD("ADD_ON_CARD"),
    VIRTUAL_CARD("VIRTUAL_CARD");

    public final String value;

    private DataExtractsAccountClassificationEnum(String value) {
        this.value = value;
    }
}
