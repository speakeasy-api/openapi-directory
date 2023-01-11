package openapisdk.models.shared;


public enum SongContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private SongContractStatusEnum(String value) {
        this.value = value;
    }
}
