package openapisdk.models.operations;


public enum GetCallsCountStatesEnum {
    INITIALIZING("INITIALIZING"),
    RINGING("RINGING"),
    ACTIVE("ACTIVE"),
    HELD("HELD"),
    REMOTE_HELD("REMOTE_HELD");

    public final String value;

    private GetCallsCountStatesEnum(String value) {
        this.value = value;
    }
}
