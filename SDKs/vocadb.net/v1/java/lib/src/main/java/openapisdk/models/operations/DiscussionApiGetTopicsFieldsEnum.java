package openapisdk.models.operations;


public enum DiscussionApiGetTopicsFieldsEnum {
    NONE("None"),
    COMMENTS("Comments"),
    COMMENT_COUNT("CommentCount"),
    CONTENT("Content"),
    LAST_COMMENT("LastComment"),
    ALL("All");

    public final String value;

    private DiscussionApiGetTopicsFieldsEnum(String value) {
        this.value = value;
    }
}
