package openapisdk.models.shared;


public enum ReleaseEventSeriesForApiContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private ReleaseEventSeriesForApiContractStatusEnum(String value) {
        this.value = value;
    }
}
