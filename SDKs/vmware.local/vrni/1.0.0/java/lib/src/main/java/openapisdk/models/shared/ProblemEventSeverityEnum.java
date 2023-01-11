package openapisdk.models.shared;


public enum ProblemEventSeverityEnum {
    CRITICAL("CRITICAL"),
    MODERATE("MODERATE"),
    WARNING("WARNING"),
    INFO("INFO");

    public final String value;

    private ProblemEventSeverityEnum(String value) {
        this.value = value;
    }
}
