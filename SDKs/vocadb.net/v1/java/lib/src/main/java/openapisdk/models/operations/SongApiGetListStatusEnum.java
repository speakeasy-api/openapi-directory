package openapisdk.models.operations;


public enum SongApiGetListStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private SongApiGetListStatusEnum(String value) {
        this.value = value;
    }
}
