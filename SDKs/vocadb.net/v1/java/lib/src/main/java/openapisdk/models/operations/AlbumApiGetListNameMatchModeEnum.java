package openapisdk.models.operations;


public enum AlbumApiGetListNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private AlbumApiGetListNameMatchModeEnum(String value) {
        this.value = value;
    }
}
