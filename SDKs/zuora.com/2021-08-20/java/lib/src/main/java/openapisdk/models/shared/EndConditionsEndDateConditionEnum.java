package openapisdk.models.shared;


public enum EndConditionsEndDateConditionEnum {
    SUBSCRIPTION_END("Subscription_End"),
    FIXED_PERIOD("Fixed_Period"),
    SPECIFIC_END_DATE("Specific_End_Date");

    public final String value;

    private EndConditionsEndDateConditionEnum(String value) {
        this.value = value;
    }
}
