package openapisdk.models.operations;


public enum AlbumApiGetNamesNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private AlbumApiGetNamesNameMatchModeEnum(String value) {
        this.value = value;
    }
}
