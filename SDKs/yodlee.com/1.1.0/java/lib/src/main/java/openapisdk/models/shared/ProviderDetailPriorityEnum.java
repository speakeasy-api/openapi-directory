package openapisdk.models.shared;


public enum ProviderDetailPriorityEnum {
    POPULAR("POPULAR"),
    SUGGESTED("SUGGESTED"),
    COBRAND("COBRAND"),
    SEARCH("SEARCH"),
    ALL("ALL");

    public final String value;

    private ProviderDetailPriorityEnum(String value) {
        this.value = value;
    }
}
