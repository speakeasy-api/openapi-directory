package openapisdk.models.operations;


public enum DiscussionApiGetTopicsForFolderFieldsEnum {
    NONE("None"),
    COMMENTS("Comments"),
    COMMENT_COUNT("CommentCount"),
    CONTENT("Content"),
    LAST_COMMENT("LastComment"),
    ALL("All");

    public final String value;

    private DiscussionApiGetTopicsForFolderFieldsEnum(String value) {
        this.value = value;
    }
}
