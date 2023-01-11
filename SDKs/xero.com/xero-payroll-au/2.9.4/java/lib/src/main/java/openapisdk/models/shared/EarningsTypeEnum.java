package openapisdk.models.shared;


public enum EarningsTypeEnum {
    FIXED("FIXED"),
    ORDINARYTIMEEARNINGS("ORDINARYTIMEEARNINGS"),
    OVERTIMEEARNINGS("OVERTIMEEARNINGS"),
    ALLOWANCE("ALLOWANCE"),
    LUMPSUMD("LUMPSUMD"),
    EMPLOYMENTTERMINATIONPAYMENT("EMPLOYMENTTERMINATIONPAYMENT"),
    LUMPSUMA("LUMPSUMA"),
    LUMPSUMB("LUMPSUMB"),
    BONUSESANDCOMMISSIONS("BONUSESANDCOMMISSIONS"),
    LUMPSUME("LUMPSUME");

    public final String value;

    private EarningsTypeEnum(String value) {
        this.value = value;
    }
}
