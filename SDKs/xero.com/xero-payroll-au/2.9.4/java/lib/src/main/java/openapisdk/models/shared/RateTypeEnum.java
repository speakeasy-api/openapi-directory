package openapisdk.models.shared;


public enum RateTypeEnum {
    FIXEDAMOUNT("FIXEDAMOUNT"),
    MULTIPLE("MULTIPLE"),
    RATEPERUNIT("RATEPERUNIT");

    public final String value;

    private RateTypeEnum(String value) {
        this.value = value;
    }
}
