package openapisdk.models.operations;


public enum SongListApiGetFeaturedListsNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private SongListApiGetFeaturedListsNameMatchModeEnum(String value) {
        this.value = value;
    }
}
