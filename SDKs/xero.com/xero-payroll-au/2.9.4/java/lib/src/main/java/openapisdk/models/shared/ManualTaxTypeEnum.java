package openapisdk.models.shared;


public enum ManualTaxTypeEnum {
    PAYGMANUAL("PAYGMANUAL"),
    ETPOMANUAL("ETPOMANUAL"),
    ETPRMANUAL("ETPRMANUAL"),
    SCHEDULE5_MANUAL("SCHEDULE5MANUAL"),
    SCHEDULE5_STSLMANUAL("SCHEDULE5STSLMANUAL");

    public final String value;

    private ManualTaxTypeEnum(String value) {
        this.value = value;
    }
}
