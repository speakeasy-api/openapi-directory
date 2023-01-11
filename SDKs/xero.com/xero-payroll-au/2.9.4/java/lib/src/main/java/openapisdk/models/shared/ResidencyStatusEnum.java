package openapisdk.models.shared;


public enum ResidencyStatusEnum {
    AUSTRALIANRESIDENT("AUSTRALIANRESIDENT"),
    FOREIGNRESIDENT("FOREIGNRESIDENT"),
    WORKINGHOLIDAYMAKER("WORKINGHOLIDAYMAKER");

    public final String value;

    private ResidencyStatusEnum(String value) {
        this.value = value;
    }
}
