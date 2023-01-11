package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReleaseEventContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public ReleaseEventContract withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public ReleaseEventContractCategoryEnum category;
    public ReleaseEventContract withCategory(ReleaseEventContractCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customName")
    public Boolean customName;
    public ReleaseEventContract withCustomName(Boolean customName) {
        this.customName = customName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public ReleaseEventContract withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public ReleaseEventContract withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReleaseEventContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endDate")
    public OffsetDateTime endDate;
    public ReleaseEventContract withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasVenueOrVenueName")
    public Boolean hasVenueOrVenueName;
    public ReleaseEventContract withHasVenueOrVenueName(Boolean hasVenueOrVenueName) {
        this.hasVenueOrVenueName = hasVenueOrVenueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ReleaseEventContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inheritedCategory")
    public ReleaseEventContractInheritedCategoryEnum inheritedCategory;
    public ReleaseEventContract withInheritedCategory(ReleaseEventContractInheritedCategoryEnum inheritedCategory) {
        this.inheritedCategory = inheritedCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReleaseEventContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pictureMime")
    public String pictureMime;
    public ReleaseEventContract withPictureMime(String pictureMime) {
        this.pictureMime = pictureMime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public ReleaseEventSeriesContract series;
    public ReleaseEventContract withSeries(ReleaseEventSeriesContract series) {
        this.series = series;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("songList")
    public SongListBaseContract songList;
    public ReleaseEventContract withSongList(SongListBaseContract songList) {
        this.songList = songList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ReleaseEventContractStatusEnum status;
    public ReleaseEventContract withStatus(ReleaseEventContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlSlug")
    public String urlSlug;
    public ReleaseEventContract withUrlSlug(String urlSlug) {
        this.urlSlug = urlSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("venue")
    public VenueContract venue;
    public ReleaseEventContract withVenue(VenueContract venue) {
        this.venue = venue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("venueName")
    public String venueName;
    public ReleaseEventContract withVenueName(String venueName) {
        this.venueName = venueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public ReleaseEventContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
}