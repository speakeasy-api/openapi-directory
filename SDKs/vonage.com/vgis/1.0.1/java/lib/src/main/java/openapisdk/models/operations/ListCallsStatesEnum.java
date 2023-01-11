package openapisdk.models.operations;


public enum ListCallsStatesEnum {
    INITIALIZING("INITIALIZING"),
    RINGING("RINGING"),
    ACTIVE("ACTIVE"),
    HELD("HELD"),
    REMOTE_HELD("REMOTE_HELD");

    public final String value;

    private ListCallsStatesEnum(String value) {
        this.value = value;
    }
}
