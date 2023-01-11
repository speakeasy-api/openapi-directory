package openapisdk.models.shared;


public enum SubscribeRequestPaymentMethodTypeEnum {
    ACH("ACH"),
    APPLE_PAY("ApplePay"),
    BANK_TRANSFER("BankTransfer"),
    CASH("Cash"),
    CHECK("Check"),
    CREDIT_CARD("CreditCard"),
    CREDIT_CARD_REFERENCE_TRANSACTION("CreditCardReferenceTransaction"),
    DEBIT_CARD("DebitCard"),
    OTHER("Other"),
    PAY_PAL("PayPal"),
    WIRE_TRANSFER("WireTransfer");

    public final String value;

    private SubscribeRequestPaymentMethodTypeEnum(String value) {
        this.value = value;
    }
}
