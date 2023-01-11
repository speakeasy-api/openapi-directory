package openapisdk.models.shared;


public enum ScheduledTransactionDetailFrequencyEnum {
    NEVER("never"),
    DAILY("daily"),
    WEEKLY("weekly"),
    EVERY_OTHER_WEEK("everyOtherWeek"),
    TWICE_A_MONTH("twiceAMonth"),
    EVERY4_WEEKS("every4Weeks"),
    MONTHLY("monthly"),
    EVERY_OTHER_MONTH("everyOtherMonth"),
    EVERY3_MONTHS("every3Months"),
    EVERY4_MONTHS("every4Months"),
    TWICE_A_YEAR("twiceAYear"),
    YEARLY("yearly"),
    EVERY_OTHER_YEAR("everyOtherYear");

    public final String value;

    private ScheduledTransactionDetailFrequencyEnum(String value) {
        this.value = value;
    }
}
