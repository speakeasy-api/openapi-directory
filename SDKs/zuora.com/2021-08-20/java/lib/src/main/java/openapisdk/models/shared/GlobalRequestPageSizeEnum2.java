package openapisdk.models.shared;


public enum GlobalRequestPageSizeEnum2 {
    DRAFT("Draft"),
    POSTED("Posted"),
    CANCELED("Canceled"),
    ERROR("Error"),
    PENDING_FOR_TAX("PendingForTax"),
    GENERATING("Generating"),
    CANCEL_IN_PROGRESS("CancelInProgress");

    public final String value;

    private GlobalRequestPageSizeEnum2(String value) {
        this.value = value;
    }
}
