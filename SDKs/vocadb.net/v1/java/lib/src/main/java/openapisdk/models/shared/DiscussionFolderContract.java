package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DiscussionFolderContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DiscussionFolderContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public DiscussionFolderContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastTopicAuthor")
    public UserForApiContract lastTopicAuthor;
    public DiscussionFolderContract withLastTopicAuthor(UserForApiContract lastTopicAuthor) {
        this.lastTopicAuthor = lastTopicAuthor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastTopicDate")
    public OffsetDateTime lastTopicDate;
    public DiscussionFolderContract withLastTopicDate(OffsetDateTime lastTopicDate) {
        this.lastTopicDate = lastTopicDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DiscussionFolderContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicCount")
    public Integer topicCount;
    public DiscussionFolderContract withTopicCount(Integer topicCount) {
        this.topicCount = topicCount;
        return this;
    }
}