package openapisdk.models.operations;


public enum GetWatchLaterQueueSortEnum {
    ALPHABETICAL("alphabetical"),
    COMMENTS("comments"),
    DATE("date"),
    DURATION("duration"),
    LIKES("likes"),
    PLAYS("plays");

    public final String value;

    private GetWatchLaterQueueSortEnum(String value) {
        this.value = value;
    }
}
