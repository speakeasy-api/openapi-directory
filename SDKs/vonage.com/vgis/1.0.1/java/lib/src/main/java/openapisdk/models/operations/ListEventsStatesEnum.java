package openapisdk.models.operations;


public enum ListEventsStatesEnum {
    INITIALIZING("INITIALIZING"),
    RINGING("RINGING"),
    ACTIVE("ACTIVE"),
    HELD("HELD"),
    REMOTE_HELD("REMOTE_HELD"),
    DETACHED("DETACHED"),
    REJECTED("REJECTED"),
    CANCELLED("CANCELLED"),
    ANSWERED("ANSWERED"),
    MISSED("MISSED");

    public final String value;

    private ListEventsStatesEnum(String value) {
        this.value = value;
    }
}
