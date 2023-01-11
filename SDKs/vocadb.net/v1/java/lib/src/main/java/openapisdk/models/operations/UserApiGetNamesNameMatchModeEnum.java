package openapisdk.models.operations;


public enum UserApiGetNamesNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private UserApiGetNamesNameMatchModeEnum(String value) {
        this.value = value;
    }
}
