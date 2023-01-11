package openapisdk.models.shared;


public enum VenueForApiContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private VenueForApiContractStatusEnum(String value) {
        this.value = value;
    }
}
