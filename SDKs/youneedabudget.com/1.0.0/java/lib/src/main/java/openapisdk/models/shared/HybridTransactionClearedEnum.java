package openapisdk.models.shared;


public enum HybridTransactionClearedEnum {
    CLEARED("cleared"),
    UNCLEARED("uncleared"),
    RECONCILED("reconciled");

    public final String value;

    private HybridTransactionClearedEnum(String value) {
        this.value = value;
    }
}
