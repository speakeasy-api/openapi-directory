package openapisdk.models.shared;


public enum DeductionTypeCalculationTypeEnum {
    FIXEDAMOUNT("FIXEDAMOUNT"),
    PRETAX("PRETAX"),
    POSTTAX("POSTTAX");

    public final String value;

    private DeductionTypeCalculationTypeEnum(String value) {
        this.value = value;
    }
}
