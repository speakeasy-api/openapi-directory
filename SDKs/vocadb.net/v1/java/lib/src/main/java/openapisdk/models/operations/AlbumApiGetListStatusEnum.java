package openapisdk.models.operations;


public enum AlbumApiGetListStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private AlbumApiGetListStatusEnum(String value) {
        this.value = value;
    }
}
