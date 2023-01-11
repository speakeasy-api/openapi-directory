package openapisdk.models.shared;


public enum SongListForEditContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private SongListForEditContractStatusEnum(String value) {
        this.value = value;
    }
}
