package openapisdk.models.shared;


public enum TransactionBaseTypeEnum {
    CREDIT("CREDIT"),
    DEBIT("DEBIT");

    public final String value;

    private TransactionBaseTypeEnum(String value) {
        this.value = value;
    }
}
