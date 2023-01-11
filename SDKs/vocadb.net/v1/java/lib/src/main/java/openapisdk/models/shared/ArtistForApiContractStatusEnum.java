package openapisdk.models.shared;


public enum ArtistForApiContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private ArtistForApiContractStatusEnum(String value) {
        this.value = value;
    }
}
