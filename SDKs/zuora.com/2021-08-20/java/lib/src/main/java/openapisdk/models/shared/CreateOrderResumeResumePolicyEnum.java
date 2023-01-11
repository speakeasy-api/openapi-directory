package openapisdk.models.shared;


public enum CreateOrderResumeResumePolicyEnum {
    TODAY("Today"),
    FIXED_PERIODS_FROM_SUSPEND_DATE("FixedPeriodsFromSuspendDate"),
    FIXED_PERIODS_FROM_TODAY("FixedPeriodsFromToday"),
    SPECIFIC_DATE("SpecificDate"),
    SUSPEND_DATE("SuspendDate");

    public final String value;

    private CreateOrderResumeResumePolicyEnum(String value) {
        this.value = value;
    }
}
