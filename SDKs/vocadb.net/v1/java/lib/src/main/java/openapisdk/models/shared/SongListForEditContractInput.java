package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SongListForEditContractInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public UserForApiContract author;
    public SongListForEditContractInput withAuthor(UserForApiContract author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canEdit")
    public Boolean canEdit;
    public SongListForEditContractInput withCanEdit(Boolean canEdit) {
        this.canEdit = canEdit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public SongListForEditContractInput withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SongListForEditContractInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("eventDate")
    public OffsetDateTime eventDate;
    public SongListForEditContractInput withEventDate(OffsetDateTime eventDate) {
        this.eventDate = eventDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featuredCategory")
    public SongListForEditContractFeaturedCategoryEnum featuredCategory;
    public SongListForEditContractInput withFeaturedCategory(SongListForEditContractFeaturedCategoryEnum featuredCategory) {
        this.featuredCategory = featuredCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public SongListForEditContractInput withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SongListForEditContractInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("songLinks")
    public SongInListEditContractInput[] songLinks;
    public SongListForEditContractInput withSongLinks(SongInListEditContractInput[] songLinks) {
        this.songLinks = songLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SongListForEditContractStatusEnum status;
    public SongListForEditContractInput withStatus(SongListForEditContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb")
    public EntryThumbContract thumb;
    public SongListForEditContractInput withThumb(EntryThumbContract thumb) {
        this.thumb = thumb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateNotes")
    public String updateNotes;
    public SongListForEditContractInput withUpdateNotes(String updateNotes) {
        this.updateNotes = updateNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public SongListForEditContractInput withVersion(Integer version) {
        this.version = version;
        return this;
    }
}