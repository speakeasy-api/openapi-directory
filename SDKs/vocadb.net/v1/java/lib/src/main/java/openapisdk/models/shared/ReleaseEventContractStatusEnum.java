package openapisdk.models.shared;


public enum ReleaseEventContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private ReleaseEventContractStatusEnum(String value) {
        this.value = value;
    }
}
