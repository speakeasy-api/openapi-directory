package openapisdk.models.operations;


public enum VenueApiGetListNameMatchModeEnum {
    AUTO("Auto"),
    PARTIAL("Partial"),
    STARTS_WITH("StartsWith"),
    EXACT("Exact"),
    WORDS("Words");

    public final String value;

    private VenueApiGetListNameMatchModeEnum(String value) {
        this.value = value;
    }
}
