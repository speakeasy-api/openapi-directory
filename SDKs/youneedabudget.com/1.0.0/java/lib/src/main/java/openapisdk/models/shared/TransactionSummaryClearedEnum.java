package openapisdk.models.shared;


public enum TransactionSummaryClearedEnum {
    CLEARED("cleared"),
    UNCLEARED("uncleared"),
    RECONCILED("reconciled");

    public final String value;

    private TransactionSummaryClearedEnum(String value) {
        this.value = value;
    }
}
