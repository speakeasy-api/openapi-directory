package openapisdk.models.operations;


public enum ReleaseEventApiGetListStatusEnum {
    DRAFT("Draft"),
    FINISHED("Finished"),
    APPROVED("Approved"),
    LOCKED("Locked");

    public final String value;

    private ReleaseEventApiGetListStatusEnum(String value) {
        this.value = value;
    }
}
