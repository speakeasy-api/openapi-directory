package openapisdk.models.shared;


public enum EventStateEnum {
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

    private EventStateEnum(String value) {
        this.value = value;
    }
}
