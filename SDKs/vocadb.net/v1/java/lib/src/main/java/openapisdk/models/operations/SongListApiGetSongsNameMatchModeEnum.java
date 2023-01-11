package openapisdk.models.operations;


public enum SongListApiGetSongsNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private SongListApiGetSongsNameMatchModeEnum(String value) {
        this.value = value;
    }
}
