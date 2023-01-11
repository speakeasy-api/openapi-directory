package openapisdk.models.shared;


public enum SettingItemWithOperationsInformationContextEnum {
    TENANT("Tenant"),
    ENTITY("Entity"),
    USER("User"),
    NONE("None");

    public final String value;

    private SettingItemWithOperationsInformationContextEnum(String value) {
        this.value = value;
    }
}
