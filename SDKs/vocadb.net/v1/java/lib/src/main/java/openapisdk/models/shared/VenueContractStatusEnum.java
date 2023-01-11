package openapisdk.models.shared;


public enum VenueContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private VenueContractStatusEnum(String value) {
        this.value = value;
    }
}
