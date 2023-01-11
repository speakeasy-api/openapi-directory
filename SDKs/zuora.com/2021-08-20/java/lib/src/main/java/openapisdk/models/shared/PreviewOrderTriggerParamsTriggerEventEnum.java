package openapisdk.models.shared;


public enum PreviewOrderTriggerParamsTriggerEventEnum {
    CONTRACT_EFFECTIVE("ContractEffective"),
    SERVICE_ACTIVATION("ServiceActivation"),
    CUSTOMER_ACCEPTANCE("CustomerAcceptance"),
    SPECIFIC_DATE("SpecificDate");

    public final String value;

    private PreviewOrderTriggerParamsTriggerEventEnum(String value) {
        this.value = value;
    }
}
