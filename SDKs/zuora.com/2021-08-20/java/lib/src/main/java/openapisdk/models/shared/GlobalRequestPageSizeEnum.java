package openapisdk.models.shared;


public enum GlobalRequestPageSizeEnum {
    ACCOUNT("account"),
    INVOICE("invoice"),
    SUBSCRIPTION("subscription"),
    CREDITMEMO("creditmemo"),
    DEBITMEMO("debitmemo");

    public final String value;

    private GlobalRequestPageSizeEnum(String value) {
        this.value = value;
    }
}
