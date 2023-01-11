package openapisdk.models.shared;


public enum TriggerParamsTriggerEventEnum {
    CONTRACT_EFFECTIVE("ContractEffective"),
    SERVICE_ACTIVATION("ServiceActivation"),
    CUSTOMER_ACCEPTANCE("CustomerAcceptance");

    public final String value;

    private TriggerParamsTriggerEventEnum(String value) {
        this.value = value;
    }
}
