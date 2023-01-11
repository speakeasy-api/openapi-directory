package openapisdk.models.shared;


public enum AlbumForApiContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private AlbumForApiContractStatusEnum(String value) {
        this.value = value;
    }
}
