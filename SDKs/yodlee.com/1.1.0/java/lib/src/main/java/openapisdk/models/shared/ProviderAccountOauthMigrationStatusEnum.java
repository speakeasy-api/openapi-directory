package openapisdk.models.shared;


public enum ProviderAccountOauthMigrationStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    TO_BE_MIGRATED("TO_BE_MIGRATED"),
    COMPLETED("COMPLETED");

    public final String value;

    private ProviderAccountOauthMigrationStatusEnum(String value) {
        this.value = value;
    }
}
