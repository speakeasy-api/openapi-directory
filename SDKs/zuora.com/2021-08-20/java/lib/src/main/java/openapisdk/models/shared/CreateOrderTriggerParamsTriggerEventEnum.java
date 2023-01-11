package openapisdk.models.shared;


public enum CreateOrderTriggerParamsTriggerEventEnum {
    CONTRACT_EFFECTIVE("ContractEffective"),
    SERVICE_ACTIVATION("ServiceActivation"),
    CUSTOMER_ACCEPTANCE("CustomerAcceptance"),
    SPECIFIC_DATE("SpecificDate");

    public final String value;

    private CreateOrderTriggerParamsTriggerEventEnum(String value) {
        this.value = value;
    }
}
