package openapisdk.models.shared;


public enum ReleaseEventSeriesContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private ReleaseEventSeriesContractStatusEnum(String value) {
        this.value = value;
    }
}
