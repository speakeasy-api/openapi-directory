package openapisdk.models.shared;


public enum AlbumContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private AlbumContractStatusEnum(String value) {
        this.value = value;
    }
}
