package openapisdk.models.shared;


public enum UpdateTransactionClearedEnum {
    CLEARED("cleared"),
    UNCLEARED("uncleared"),
    RECONCILED("reconciled");

    public final String value;

    private UpdateTransactionClearedEnum(String value) {
        this.value = value;
    }
}
