package openapisdk.models.operations;


public enum UserApiGetListNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private UserApiGetListNameMatchModeEnum(String value) {
        this.value = value;
    }
}
