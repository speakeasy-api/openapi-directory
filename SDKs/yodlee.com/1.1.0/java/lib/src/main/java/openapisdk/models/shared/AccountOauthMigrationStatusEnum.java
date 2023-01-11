package openapisdk.models.shared;


public enum AccountOauthMigrationStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    TO_BE_MIGRATED("TO_BE_MIGRATED"),
    COMPLETED("COMPLETED");

    public final String value;

    private AccountOauthMigrationStatusEnum(String value) {
        this.value = value;
    }
}
