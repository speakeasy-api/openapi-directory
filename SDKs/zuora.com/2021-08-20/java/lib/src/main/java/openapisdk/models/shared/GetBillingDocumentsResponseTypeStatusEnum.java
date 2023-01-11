package openapisdk.models.shared;


public enum GetBillingDocumentsResponseTypeStatusEnum {
    DRAFT("Draft"),
    POSTED("Posted"),
    CANCELED("Canceled"),
    ERROR("Error");

    public final String value;

    private GetBillingDocumentsResponseTypeStatusEnum(String value) {
        this.value = value;
    }
}
