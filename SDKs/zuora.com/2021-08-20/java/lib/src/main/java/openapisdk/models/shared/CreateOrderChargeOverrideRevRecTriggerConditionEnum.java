package openapisdk.models.shared;


public enum CreateOrderChargeOverrideRevRecTriggerConditionEnum {
    CONTRACT_EFFECTIVE_DATE("Contract Effective Date"),
    SERVICE_ACTIVATION_DATE("Service Activation Date"),
    CUSTOMER_ACCEPTANCE_DATE("Customer Acceptance Date");

    public final String value;

    private CreateOrderChargeOverrideRevRecTriggerConditionEnum(String value) {
        this.value = value;
    }
}
