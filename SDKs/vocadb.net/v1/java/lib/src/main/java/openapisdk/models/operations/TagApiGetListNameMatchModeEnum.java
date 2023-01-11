package openapisdk.models.operations;


public enum TagApiGetListNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private TagApiGetListNameMatchModeEnum(String value) {
        this.value = value;
    }
}
