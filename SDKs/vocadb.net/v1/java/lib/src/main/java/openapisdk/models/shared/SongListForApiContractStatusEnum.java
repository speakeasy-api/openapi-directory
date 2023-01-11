package openapisdk.models.shared;


public enum SongListForApiContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private SongListForApiContractStatusEnum(String value) {
        this.value = value;
    }
}
