package openapisdk.models.operations;


public enum UserApiGetRatedSongsNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private UserApiGetRatedSongsNameMatchModeEnum(String value) {
        this.value = value;
    }
}
