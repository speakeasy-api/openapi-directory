package openapisdk.models.operations;


public enum ReleaseEventApiGetListNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private ReleaseEventApiGetListNameMatchModeEnum(String value) {
        this.value = value;
    }
}
