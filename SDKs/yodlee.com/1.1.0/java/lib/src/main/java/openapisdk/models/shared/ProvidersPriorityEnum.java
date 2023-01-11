package openapisdk.models.shared;


public enum ProvidersPriorityEnum {
    POPULAR("POPULAR"),
    SUGGESTED("SUGGESTED"),
    COBRAND("COBRAND"),
    SEARCH("SEARCH"),
    ALL("ALL");

    public final String value;

    private ProvidersPriorityEnum(String value) {
        this.value = value;
    }
}
