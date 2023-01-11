package openapisdk.models.shared;


public enum DerivedTransactionsSummaryCategoryTypeEnum {
    TRANSFER("TRANSFER"),
    DEFERRED_COMPENSATION("DEFERRED_COMPENSATION"),
    UNCATEGORIZE("UNCATEGORIZE"),
    INCOME("INCOME"),
    EXPENSE("EXPENSE");

    public final String value;

    private DerivedTransactionsSummaryCategoryTypeEnum(String value) {
        this.value = value;
    }
}
