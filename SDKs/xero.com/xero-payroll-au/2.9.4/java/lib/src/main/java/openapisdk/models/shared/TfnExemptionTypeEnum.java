package openapisdk.models.shared;


public enum TfnExemptionTypeEnum {
    NOTQUOTED("NOTQUOTED"),
    PENDING("PENDING"),
    PENSIONER("PENSIONER"),
    UNDER18("UNDER18");

    public final String value;

    private TfnExemptionTypeEnum(String value) {
        this.value = value;
    }
}
