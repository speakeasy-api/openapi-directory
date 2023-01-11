package openapisdk.models.shared;


public enum GlobalHeaderZuoraTrackIdEnum {
    ACCEPTED("accepted"),
    IN_PROGRESS("in_progress"),
    COMPLETED("completed"),
    FAILED("failed"),
    CANCELLED("cancelled");

    public final String value;

    private GlobalHeaderZuoraTrackIdEnum(String value) {
        this.value = value;
    }
}
