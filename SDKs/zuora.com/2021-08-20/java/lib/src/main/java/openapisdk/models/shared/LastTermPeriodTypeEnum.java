package openapisdk.models.shared;


public enum LastTermPeriodTypeEnum {
    MONTH("Month"),
    YEAR("Year"),
    DAY("Day"),
    WEEK("Week");

    public final String value;

    private LastTermPeriodTypeEnum(String value) {
        this.value = value;
    }
}
