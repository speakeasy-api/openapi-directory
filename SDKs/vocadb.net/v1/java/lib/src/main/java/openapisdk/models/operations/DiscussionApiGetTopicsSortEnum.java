package openapisdk.models.operations;


public enum DiscussionApiGetTopicsSortEnum {
    NONE("None"),
    NAME("Name"),
    DATE_CREATED("DateCreated"),
    LAST_COMMENT_DATE("LastCommentDate");

    public final String value;

    private DiscussionApiGetTopicsSortEnum(String value) {
        this.value = value;
    }
}
