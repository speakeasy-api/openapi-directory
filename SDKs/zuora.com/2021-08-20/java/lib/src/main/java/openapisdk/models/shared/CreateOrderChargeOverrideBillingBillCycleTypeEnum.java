package openapisdk.models.shared;


public enum CreateOrderChargeOverrideBillingBillCycleTypeEnum {
    DEFAULT_FROM_CUSTOMER("DefaultFromCustomer"),
    SPECIFIC_DAYOF_MONTH("SpecificDayofMonth"),
    SUBSCRIPTION_START_DAY("SubscriptionStartDay"),
    CHARGE_TRIGGER_DAY("ChargeTriggerDay"),
    SPECIFIC_DAYOF_WEEK("SpecificDayofWeek");

    public final String value;

    private CreateOrderChargeOverrideBillingBillCycleTypeEnum(String value) {
        this.value = value;
    }
}
