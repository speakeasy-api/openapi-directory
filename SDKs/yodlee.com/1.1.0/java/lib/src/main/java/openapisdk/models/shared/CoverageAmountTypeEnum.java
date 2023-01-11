package openapisdk.models.shared;


public enum CoverageAmountTypeEnum {
    DEDUCTIBLE("DEDUCTIBLE"),
    OUT_OF_POCKET("OUT_OF_POCKET"),
    ANNUAL_BENEFIT("ANNUAL_BENEFIT"),
    MAX_BENEFIT("MAX_BENEFIT"),
    COVERAGE_AMOUNT("COVERAGE_AMOUNT"),
    MONTHLY_BENEFIT("MONTHLY_BENEFIT"),
    OTHER("OTHER");

    public final String value;

    private CoverageAmountTypeEnum(String value) {
        this.value = value;
    }
}
