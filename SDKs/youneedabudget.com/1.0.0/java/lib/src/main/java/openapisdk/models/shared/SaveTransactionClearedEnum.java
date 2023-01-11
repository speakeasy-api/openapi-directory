package openapisdk.models.shared;


public enum SaveTransactionClearedEnum {
    CLEARED("cleared"),
    UNCLEARED("uncleared"),
    RECONCILED("reconciled");

    public final String value;

    private SaveTransactionClearedEnum(String value) {
        this.value = value;
    }
}
