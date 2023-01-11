package openapisdk.models.shared;


public enum ProxyGetPaymentMethodTypeEnum {
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

    private ProxyGetPaymentMethodTypeEnum(String value) {
        this.value = value;
    }
}
