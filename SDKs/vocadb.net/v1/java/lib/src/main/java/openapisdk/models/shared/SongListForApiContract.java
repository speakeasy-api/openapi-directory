package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SongListForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public UserForApiContract author;
    public SongListForApiContract withAuthor(UserForApiContract author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public SongListForApiContract withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SongListForApiContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("eventDate")
    public OffsetDateTime eventDate;
    public SongListForApiContract withEventDate(OffsetDateTime eventDate) {
        this.eventDate = eventDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public ReleaseEventForApiContract[] events;
    public SongListForApiContract withEvents(ReleaseEventForApiContract[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featuredCategory")
    public SongListForApiContractFeaturedCategoryEnum featuredCategory;
    public SongListForApiContract withFeaturedCategory(SongListForApiContractFeaturedCategoryEnum featuredCategory) {
        this.featuredCategory = featuredCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public SongListForApiContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestComments")
    public CommentForApiContract[] latestComments;
    public SongListForApiContract withLatestComments(CommentForApiContract[] latestComments) {
        this.latestComments = latestComments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainPicture")
    public EntryThumbForApiContract mainPicture;
    public SongListForApiContract withMainPicture(EntryThumbForApiContract mainPicture) {
        this.mainPicture = mainPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SongListForApiContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SongListForApiContractStatusEnum status;
    public SongListForApiContract withStatus(SongListForApiContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public TagUsageForApiContract[] tags;
    public SongListForApiContract withTags(TagUsageForApiContract[] tags) {
        this.tags = tags;
        return this;
    }
}