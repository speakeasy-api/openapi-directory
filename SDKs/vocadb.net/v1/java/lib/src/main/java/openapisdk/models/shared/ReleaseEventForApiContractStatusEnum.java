package openapisdk.models.shared;


public enum ReleaseEventForApiContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private ReleaseEventForApiContractStatusEnum(String value) {
        this.value = value;
    }
}
