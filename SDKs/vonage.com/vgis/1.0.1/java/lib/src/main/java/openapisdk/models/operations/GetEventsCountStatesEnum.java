package openapisdk.models.operations;


public enum GetEventsCountStatesEnum {
    INITIALIZING("INITIALIZING"),
    RINGING("RINGING"),
    ACTIVE("ACTIVE"),
    HELD("HELD"),
    REMOTE_HELD("REMOTE_HELD");

    public final String value;

    private GetEventsCountStatesEnum(String value) {
        this.value = value;
    }
}
