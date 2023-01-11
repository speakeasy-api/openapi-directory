package openapisdk.models.operations;


public enum SearchVideosSortEnum {
    ALPHABETICAL("alphabetical"),
    COMMENTS("comments"),
    DATE("date"),
    DURATION("duration"),
    LIKES("likes"),
    PLAYS("plays"),
    RELEVANT("relevant");

    public final String value;

    private SearchVideosSortEnum(String value) {
        this.value = value;
    }
}
