package openapisdk.models.operations;


public enum UserApiGetAlbumCollectionNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private UserApiGetAlbumCollectionNameMatchModeEnum(String value) {
        this.value = value;
    }
}
