package openapisdk.models.shared;


public enum AccountDatasetNameEnum {
    BASIC_AGG_DATA("BASIC_AGG_DATA"),
    ADVANCE_AGG_DATA("ADVANCE_AGG_DATA"),
    ACCT_PROFILE("ACCT_PROFILE"),
    DOCUMENT("DOCUMENT");

    public final String value;

    private AccountDatasetNameEnum(String value) {
        this.value = value;
    }
}
