package openapisdk.models.shared;


public enum GetJournalRunTypeStatusEnum {
    PENDING("Pending"),
    PROCESSING("Processing"),
    COMPLETED("Completed"),
    ERROR("Error"),
    CANCEL_INPROGRESS("CancelInprogress"),
    CANCELLED("Cancelled"),
    DELETE_INPROGRESS("DeleteInprogress");

    public final String value;

    private GetJournalRunTypeStatusEnum(String value) {
        this.value = value;
    }
}
