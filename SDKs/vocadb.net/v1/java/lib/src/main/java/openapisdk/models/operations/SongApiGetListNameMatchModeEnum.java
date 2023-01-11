package openapisdk.models.operations;


public enum SongApiGetListNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private SongApiGetListNameMatchModeEnum(String value) {
        this.value = value;
    }
}
