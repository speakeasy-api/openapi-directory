package openapisdk.models.shared;


public enum TransactionDetailClearedEnum {
    CLEARED("cleared"),
    UNCLEARED("uncleared"),
    RECONCILED("reconciled");

    public final String value;

    private TransactionDetailClearedEnum(String value) {
        this.value = value;
    }
}
