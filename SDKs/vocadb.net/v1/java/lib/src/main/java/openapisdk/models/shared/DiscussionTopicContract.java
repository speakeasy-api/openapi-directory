package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DiscussionTopicContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public UserForApiContract author;
    public DiscussionTopicContract withAuthor(UserForApiContract author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentCount")
    public Integer commentCount;
    public DiscussionTopicContract withCommentCount(Integer commentCount) {
        this.commentCount = commentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public CommentForApiContract[] comments;
    public DiscussionTopicContract withComments(CommentForApiContract[] comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public DiscussionTopicContract withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public DiscussionTopicContract withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folderId")
    public Integer folderId;
    public DiscussionTopicContract withFolderId(Integer folderId) {
        this.folderId = folderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public DiscussionTopicContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastComment")
    public CommentForApiContract lastComment;
    public DiscussionTopicContract withLastComment(CommentForApiContract lastComment) {
        this.lastComment = lastComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public DiscussionTopicContract withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DiscussionTopicContract withName(String name) {
        this.name = name;
        return this;
    }
}