package openapisdk.models.shared;


public enum GetPaymentRunDataElementResponseDocumentTypeEnum {
    INVOICE("Invoice"),
    DEBIT_MEMO("DebitMemo");

    public final String value;

    private GetPaymentRunDataElementResponseDocumentTypeEnum(String value) {
        this.value = value;
    }
}
