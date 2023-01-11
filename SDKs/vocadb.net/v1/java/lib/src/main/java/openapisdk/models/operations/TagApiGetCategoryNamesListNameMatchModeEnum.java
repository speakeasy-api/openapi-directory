package openapisdk.models.operations;


public enum TagApiGetCategoryNamesListNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private TagApiGetCategoryNamesListNameMatchModeEnum(String value) {
        this.value = value;
    }
}
