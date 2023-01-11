package openapisdk.models.shared;


public enum PostRejectPaymentResponseMethodTypeEnum {
    ACH("ACH"),
    CASH("Cash"),
    CHECK("Check"),
    CREDIT_CARD("CreditCard"),
    PAY_PAL("PayPal"),
    WIRE_TRANSFER("WireTransfer"),
    DEBIT_CARD("DebitCard"),
    CREDIT_CARD_REFERENCE_TRANSACTION("CreditCardReferenceTransaction"),
    BANK_TRANSFER("BankTransfer"),
    OTHER("Other");

    public final String value;

    private PostRejectPaymentResponseMethodTypeEnum(String value) {
        this.value = value;
    }
}
