package openapisdk.models.operations;


public enum ArtistApiGetListStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private ArtistApiGetListStatusEnum(String value) {
        this.value = value;
    }
}
