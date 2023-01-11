package openapisdk.models.shared;


public enum DataExtractsTransactionCategoryTypeEnum {
    TRANSFER("TRANSFER"),
    DEFERRED_COMPENSATION("DEFERRED_COMPENSATION"),
    UNCATEGORIZE("UNCATEGORIZE"),
    INCOME("INCOME"),
    EXPENSE("EXPENSE");

    public final String value;

    private DataExtractsTransactionCategoryTypeEnum(String value) {
        this.value = value;
    }
}
