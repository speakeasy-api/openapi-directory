package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReleaseEventForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public ReleaseEventForApiContract withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public ArtistForEventContract[] artists;
    public ReleaseEventForApiContract withArtists(ArtistForEventContract[] artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public ReleaseEventForApiContractCategoryEnum category;
    public ReleaseEventForApiContract withCategory(ReleaseEventForApiContractCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public ReleaseEventForApiContract withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReleaseEventForApiContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endDate")
    public OffsetDateTime endDate;
    public ReleaseEventForApiContract withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ReleaseEventForApiContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainPicture")
    public EntryThumbForApiContract mainPicture;
    public ReleaseEventForApiContract withMainPicture(EntryThumbForApiContract mainPicture) {
        this.mainPicture = mainPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReleaseEventForApiContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public LocalizedStringContract[] names;
    public ReleaseEventForApiContract withNames(LocalizedStringContract[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public ReleaseEventSeriesContract series;
    public ReleaseEventForApiContract withSeries(ReleaseEventSeriesContract series) {
        this.series = series;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesId")
    public Integer seriesId;
    public ReleaseEventForApiContract withSeriesId(Integer seriesId) {
        this.seriesId = seriesId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesNumber")
    public Integer seriesNumber;
    public ReleaseEventForApiContract withSeriesNumber(Integer seriesNumber) {
        this.seriesNumber = seriesNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesSuffix")
    public String seriesSuffix;
    public ReleaseEventForApiContract withSeriesSuffix(String seriesSuffix) {
        this.seriesSuffix = seriesSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("songList")
    public SongListBaseContract songList;
    public ReleaseEventForApiContract withSongList(SongListBaseContract songList) {
        this.songList = songList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ReleaseEventForApiContractStatusEnum status;
    public ReleaseEventForApiContract withStatus(ReleaseEventForApiContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public TagUsageForApiContract[] tags;
    public ReleaseEventForApiContract withTags(TagUsageForApiContract[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlSlug")
    public String urlSlug;
    public ReleaseEventForApiContract withUrlSlug(String urlSlug) {
        this.urlSlug = urlSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("venue")
    public VenueForApiContract venue;
    public ReleaseEventForApiContract withVenue(VenueForApiContract venue) {
        this.venue = venue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("venueName")
    public String venueName;
    public ReleaseEventForApiContract withVenueName(String venueName) {
        this.venueName = venueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public ReleaseEventForApiContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webLinks")
    public WebLinkForApiContract[] webLinks;
    public ReleaseEventForApiContract withWebLinks(WebLinkForApiContract[] webLinks) {
        this.webLinks = webLinks;
        return this;
    }
}