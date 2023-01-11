package openapisdk.models.operations;


public enum EntryApiGetNamesNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private EntryApiGetNamesNameMatchModeEnum(String value) {
        this.value = value;
    }
}
