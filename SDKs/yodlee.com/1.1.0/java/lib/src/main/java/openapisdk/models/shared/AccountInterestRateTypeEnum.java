package openapisdk.models.shared;


public enum AccountInterestRateTypeEnum {
    FIXED("FIXED"),
    VARIABLE("VARIABLE"),
    UNKNOWN("UNKNOWN"),
    OTHER("OTHER");

    public final String value;

    private AccountInterestRateTypeEnum(String value) {
        this.value = value;
    }
}
