package openapisdk.models.shared;


public enum GetBillingDocumentFilesDeletionJobResponseStatusEnum {
    PENDING("Pending"),
    PROCESSING("Processing"),
    COMPLETED("Completed"),
    ERROR("Error");

    public final String value;

    private GetBillingDocumentFilesDeletionJobResponseStatusEnum(String value) {
        this.value = value;
    }
}
