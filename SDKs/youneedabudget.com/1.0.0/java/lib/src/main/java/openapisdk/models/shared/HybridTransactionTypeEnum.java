package openapisdk.models.shared;


public enum HybridTransactionTypeEnum {
    TRANSACTION("transaction"),
    SUBTRANSACTION("subtransaction");

    public final String value;

    private HybridTransactionTypeEnum(String value) {
        this.value = value;
    }
}
