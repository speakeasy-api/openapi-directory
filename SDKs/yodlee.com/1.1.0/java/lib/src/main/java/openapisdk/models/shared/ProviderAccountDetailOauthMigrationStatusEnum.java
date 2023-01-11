package openapisdk.models.shared;


public enum ProviderAccountDetailOauthMigrationStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    TO_BE_MIGRATED("TO_BE_MIGRATED"),
    COMPLETED("COMPLETED");

    public final String value;

    private ProviderAccountDetailOauthMigrationStatusEnum(String value) {
        this.value = value;
    }
}
