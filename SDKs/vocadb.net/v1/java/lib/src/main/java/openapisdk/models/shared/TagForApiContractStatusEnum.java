package openapisdk.models.shared;


public enum TagForApiContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private TagForApiContractStatusEnum(String value) {
        this.value = value;
    }
}
