package openapisdk.models.shared;


public enum GetBillingDocumentsResponseTypeDocumentTypeEnum {
    INVOICE("Invoice"),
    CREDIT_MEMO("CreditMemo"),
    DEBIT_MEMO("DebitMemo");

    public final String value;

    private GetBillingDocumentsResponseTypeDocumentTypeEnum(String value) {
        this.value = value;
    }
}
