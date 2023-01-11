package openapisdk.models.shared;


public enum AccountHomeInsuranceTypeEnum {
    HOME_OWNER("HOME_OWNER"),
    RENTAL("RENTAL"),
    RENTER("RENTER"),
    UNKNOWN("UNKNOWN"),
    OTHER("OTHER");

    public final String value;

    private AccountHomeInsuranceTypeEnum(String value) {
        this.value = value;
    }
}
