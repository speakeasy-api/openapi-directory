package openapisdk.models.shared;


public enum DocumentDocTypeEnum {
    STMT("STMT"),
    TAX("TAX"),
    EBILL("EBILL");

    public final String value;

    private DocumentDocTypeEnum(String value) {
        this.value = value;
    }
}
