package openapisdk.models.shared;


public enum GetStoredCredentialProfilesResponseProfilesStatusEnum {
    AGREED("Agreed"),
    ACTIVE("Active"),
    CANCELLED("Cancelled"),
    EXPIRED("Expired");

    public final String value;

    private GetStoredCredentialProfilesResponseProfilesStatusEnum(String value) {
        this.value = value;
    }
}
