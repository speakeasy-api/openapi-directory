package openapisdk.models.shared;


public enum GetPaymentRunDataTransactionElementResponseTypeEnum {
    PAYMENT("Payment"),
    CREDIT_MEMO("CreditMemo"),
    UNAPPLIED_PAYMENT("UnappliedPayment"),
    CREDIT_BALANCE_ADJUSTMENT("CreditBalanceAdjustment");

    public final String value;

    private GetPaymentRunDataTransactionElementResponseTypeEnum(String value) {
        this.value = value;
    }
}
