package openapisdk.models.shared;


public enum ArtistContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private ArtistContractStatusEnum(String value) {
        this.value = value;
    }
}
