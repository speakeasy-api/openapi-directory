package openapisdk.models.shared;


public enum TriggerDateNameEnum {
    CONTRACT_EFFECTIVE("ContractEffective"),
    SERVICE_ACTIVATION("ServiceActivation"),
    CUSTOMER_ACCEPTANCE("CustomerAcceptance");

    public final String value;

    private TriggerDateNameEnum(String value) {
        this.value = value;
    }
}
