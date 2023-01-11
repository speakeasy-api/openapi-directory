package openapisdk.models.operations;


public enum ArtistApiGetNamesNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private ArtistApiGetNamesNameMatchModeEnum(String value) {
        this.value = value;
    }
}
