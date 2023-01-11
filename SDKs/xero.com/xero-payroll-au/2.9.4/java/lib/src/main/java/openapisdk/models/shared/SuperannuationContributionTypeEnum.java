package openapisdk.models.shared;


public enum SuperannuationContributionTypeEnum {
    SGC("SGC"),
    SALARYSACRIFICE("SALARYSACRIFICE"),
    EMPLOYERADDITIONAL("EMPLOYERADDITIONAL"),
    EMPLOYEE("EMPLOYEE");

    public final String value;

    private SuperannuationContributionTypeEnum(String value) {
        this.value = value;
    }
}
