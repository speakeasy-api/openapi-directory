package openapisdk.models.shared;


public enum EntryForApiContractStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private EntryForApiContractStatusEnum(String value) {
        this.value = value;
    }
}
