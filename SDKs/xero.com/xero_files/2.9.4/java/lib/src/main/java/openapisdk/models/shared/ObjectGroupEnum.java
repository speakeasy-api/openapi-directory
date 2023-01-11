package openapisdk.models.shared;


public enum ObjectGroupEnum {
    ACCOUNT("Account"),
    BANK_TRANSACTION("BankTransaction"),
    CONTACT("Contact"),
    CREDIT_NOTE("CreditNote"),
    INVOICE("Invoice"),
    ITEM("Item"),
    MANUAL_JOURNAL("ManualJournal"),
    OVERPAYMENT("Overpayment"),
    PAYMENT("Payment"),
    PREPAYMENT("Prepayment"),
    RECEIPT("Receipt");

    public final String value;

    private ObjectGroupEnum(String value) {
        this.value = value;
    }
}
