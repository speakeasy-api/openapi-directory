package openapisdk.models.operations;


public enum ParticipantFeedbackTypeEnum {
    PAST("past"),
    PAST_ONE("pastOne"),
    LIVE("live");

    public final String value;

    private ParticipantFeedbackTypeEnum(String value) {
        this.value = value;
    }
}
