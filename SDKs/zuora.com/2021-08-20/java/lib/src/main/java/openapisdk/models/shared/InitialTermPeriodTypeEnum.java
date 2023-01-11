package openapisdk.models.shared;


public enum InitialTermPeriodTypeEnum {
    MONTH("Month"),
    YEAR("Year"),
    DAY("Day"),
    WEEK("Week");

    public final String value;

    private InitialTermPeriodTypeEnum(String value) {
        this.value = value;
    }
}
