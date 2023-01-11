package openapisdk.models.shared;


public enum SongForApiContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private SongForApiContractStatusEnum(String value) {
        this.value = value;
    }
}
