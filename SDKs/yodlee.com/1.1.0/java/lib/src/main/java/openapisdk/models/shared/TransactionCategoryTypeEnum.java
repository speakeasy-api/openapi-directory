package openapisdk.models.shared;


public enum TransactionCategoryTypeEnum {
    TRANSFER("TRANSFER"),
    DEFERRED_COMPENSATION("DEFERRED_COMPENSATION"),
    UNCATEGORIZE("UNCATEGORIZE"),
    INCOME("INCOME"),
    EXPENSE("EXPENSE");

    public final String value;

    private TransactionCategoryTypeEnum(String value) {
        this.value = value;
    }
}
