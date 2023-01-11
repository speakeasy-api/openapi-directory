package openapisdk.models.shared;


public enum CreateOrderUpdateProductTriggerParamsTriggerEventEnum {
    CONTRACT_EFFECTIVE("ContractEffective"),
    SERVICE_ACTIVATION("ServiceActivation"),
    CUSTOMER_ACCEPTANCE("CustomerAcceptance"),
    SPECIFIC_DATE("SpecificDate");

    public final String value;

    private CreateOrderUpdateProductTriggerParamsTriggerEventEnum(String value) {
        this.value = value;
    }
}
