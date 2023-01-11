package openapisdk.models.shared;


public enum DataExtractsAccountRepaymentPlanTypeEnum {
    STANDARD("STANDARD"),
    GRADUATED("GRADUATED"),
    EXTENDED("EXTENDED"),
    INCOME_BASED("INCOME_BASED"),
    INCOME_CONTINGENT("INCOME_CONTINGENT"),
    INCOME_SENSITIVE("INCOME_SENSITIVE"),
    PAY_AS_YOU_EARN("PAY_AS_YOU_EARN"),
    REVISED_PAY_AS_YOU_EARN("REVISED_PAY_AS_YOU_EARN");

    public final String value;

    private DataExtractsAccountRepaymentPlanTypeEnum(String value) {
        this.value = value;
    }
}
