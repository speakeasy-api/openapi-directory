package openapisdk.models.operations;


public enum EntryApiGetListNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private EntryApiGetListNameMatchModeEnum(String value) {
        this.value = value;
    }
}
