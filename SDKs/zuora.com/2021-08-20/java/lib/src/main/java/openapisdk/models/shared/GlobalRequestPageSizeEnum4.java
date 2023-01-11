package openapisdk.models.shared;


public enum GlobalRequestPageSizeEnum4 {
    PENDING("Pending"),
    PROCESSING("Processing"),
    COMPLETED("Completed"),
    ERROR("Error"),
    CANCELED("Canceled");

    public final String value;

    private GlobalRequestPageSizeEnum4(String value) {
        this.value = value;
    }
}
