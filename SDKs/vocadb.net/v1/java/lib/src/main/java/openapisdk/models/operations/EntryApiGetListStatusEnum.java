package openapisdk.models.operations;


public enum EntryApiGetListStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private EntryApiGetListStatusEnum(String value) {
        this.value = value;
    }
}
