package openapisdk.models.shared;


public enum CreateOrderChargeOverrideBillingBillingPeriodEnum {
    MONTH("Month"),
    QUARTER("Quarter"),
    SEMI_ANNUAL("Semi_Annual"),
    ANNUAL("Annual"),
    EIGHTEEN_MONTHS("Eighteen_Months"),
    TWO_YEARS("Two_Years"),
    THREE_YEARS("Three_Years"),
    FIVE_YEARS("Five_Years"),
    SPECIFIC_MONTHS("Specific_Months"),
    SUBSCRIPTION_TERM("Subscription_Term"),
    WEEK("Week"),
    SPECIFIC_WEEKS("Specific_Weeks");

    public final String value;

    private CreateOrderChargeOverrideBillingBillingPeriodEnum(String value) {
        this.value = value;
    }
}
