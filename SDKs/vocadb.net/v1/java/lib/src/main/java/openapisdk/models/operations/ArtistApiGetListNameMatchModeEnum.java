package openapisdk.models.operations;


public enum ArtistApiGetListNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private ArtistApiGetListNameMatchModeEnum(String value) {
        this.value = value;
    }
}
