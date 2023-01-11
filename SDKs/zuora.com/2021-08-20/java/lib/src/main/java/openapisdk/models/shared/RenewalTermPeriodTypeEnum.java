package openapisdk.models.shared;


public enum RenewalTermPeriodTypeEnum {
    MONTH("Month"),
    YEAR("Year"),
    DAY("Day"),
    WEEK("Week");

    public final String value;

    private RenewalTermPeriodTypeEnum(String value) {
        this.value = value;
    }
}
