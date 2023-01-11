package openapisdk.models.shared;


public enum GlobalHeaderZuoraEntityIdsSingleEnum {
    ACCOUNT("Account"),
    INVOICE("Invoice"),
    SUBSCRIPTION("Subscription"),
    CREDIT_MEMO("CreditMemo"),
    DEBIT_MEMO("DebitMemo");

    public final String value;

    private GlobalHeaderZuoraEntityIdsSingleEnum(String value) {
        this.value = value;
    }
}
