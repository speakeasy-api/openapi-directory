package openapisdk.models.operations;


public enum DiscussionApiGetTopicFieldsEnum {
    NONE("None"),
    COMMENTS("Comments"),
    COMMENT_COUNT("CommentCount"),
    CONTENT("Content"),
    LAST_COMMENT("LastComment"),
    ALL("All");

    public final String value;

    private DiscussionApiGetTopicFieldsEnum(String value) {
        this.value = value;
    }
}
