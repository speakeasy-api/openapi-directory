package openapisdk.models.operations;


public enum UserApiGetSongListsNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private UserApiGetSongListsNameMatchModeEnum(String value) {
        this.value = value;
    }
}
