package openapisdk.models.shared;


public enum GetDocumentPropertiesResponseTypeDocumentTypeEnum {
    INVOICE("Invoice"),
    CREDIT_MEMO("CreditMemo"),
    DEBIT_MEMO("DebitMemo");

    public final String value;

    private GetDocumentPropertiesResponseTypeDocumentTypeEnum(String value) {
        this.value = value;
    }
}
