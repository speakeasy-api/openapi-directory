package openapisdk.models.operations;


public enum SearchUsersSortEnum {
    ALPHABETICAL("alphabetical"),
    DATE("date"),
    FOLLOWERS("followers"),
    RELEVANT("relevant"),
    VIDEOS("videos");

    public final String value;

    private SearchUsersSortEnum(String value) {
        this.value = value;
    }
}
