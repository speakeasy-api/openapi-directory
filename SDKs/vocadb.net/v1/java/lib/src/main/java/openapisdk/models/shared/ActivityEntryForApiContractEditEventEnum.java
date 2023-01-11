package openapisdk.models.shared;


public enum ActivityEntryForApiContractEditEventEnum {
    CREATED("Created"),
    UPDATED("Updated"),
    DELETED("Deleted"),
    RESTORED("Restored");

    public final String value;

    private ActivityEntryForApiContractEditEventEnum(String value) {
        this.value = value;
    }
}
