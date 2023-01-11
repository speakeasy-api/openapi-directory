package openapisdk.models.shared;


public enum SuperannuationCalculationTypeEnum {
    FIXEDAMOUNT("FIXEDAMOUNT"),
    PERCENTAGEOFEARNINGS("PERCENTAGEOFEARNINGS"),
    STATUTORY("STATUTORY");

    public final String value;

    private SuperannuationCalculationTypeEnum(String value) {
        this.value = value;
    }
}
