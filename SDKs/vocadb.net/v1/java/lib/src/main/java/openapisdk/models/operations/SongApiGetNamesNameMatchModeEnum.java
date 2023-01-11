package openapisdk.models.operations;


public enum SongApiGetNamesNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private SongApiGetNamesNameMatchModeEnum(String value) {
        this.value = value;
    }
}
