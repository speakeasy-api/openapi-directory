package openapisdk.models.shared;


public enum PostDocumentPropertiesTypeDocumentTypeEnum {
    INVOICE("Invoice"),
    CREDIT_MEMO("CreditMemo"),
    DEBIT_MEMO("DebitMemo");

    public final String value;

    private PostDocumentPropertiesTypeDocumentTypeEnum(String value) {
        this.value = value;
    }
}
