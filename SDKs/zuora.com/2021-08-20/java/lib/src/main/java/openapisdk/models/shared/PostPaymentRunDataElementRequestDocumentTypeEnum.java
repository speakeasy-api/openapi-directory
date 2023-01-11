package openapisdk.models.shared;


public enum PostPaymentRunDataElementRequestDocumentTypeEnum {
    INVOICE("Invoice"),
    DEBIT_MEMO("DebitMemo");

    public final String value;

    private PostPaymentRunDataElementRequestDocumentTypeEnum(String value) {
        this.value = value;
    }
}
