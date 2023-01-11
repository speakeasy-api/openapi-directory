package openapisdk.models.shared;


public enum AccountDatasetUpdateEligibilityEnum {
    ALLOW_UPDATE("ALLOW_UPDATE"),
    ALLOW_UPDATE_WITH_CREDENTIALS("ALLOW_UPDATE_WITH_CREDENTIALS"),
    DISALLOW_UPDATE("DISALLOW_UPDATE");

    public final String value;

    private AccountDatasetUpdateEligibilityEnum(String value) {
        this.value = value;
    }
}
