package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReleaseEventForApiContractInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public ReleaseEventForApiContractInput withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public ArtistForEventContract[] artists;
    public ReleaseEventForApiContractInput withArtists(ArtistForEventContract[] artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public ReleaseEventForApiContractCategoryEnum category;
    public ReleaseEventForApiContractInput withCategory(ReleaseEventForApiContractCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public ReleaseEventForApiContractInput withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReleaseEventForApiContractInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endDate")
    public OffsetDateTime endDate;
    public ReleaseEventForApiContractInput withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ReleaseEventForApiContractInput withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainPicture")
    public EntryThumbForApiContract mainPicture;
    public ReleaseEventForApiContractInput withMainPicture(EntryThumbForApiContract mainPicture) {
        this.mainPicture = mainPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReleaseEventForApiContractInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public LocalizedStringContract[] names;
    public ReleaseEventForApiContractInput withNames(LocalizedStringContract[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public ReleaseEventSeriesContract series;
    public ReleaseEventForApiContractInput withSeries(ReleaseEventSeriesContract series) {
        this.series = series;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesId")
    public Integer seriesId;
    public ReleaseEventForApiContractInput withSeriesId(Integer seriesId) {
        this.seriesId = seriesId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesNumber")
    public Integer seriesNumber;
    public ReleaseEventForApiContractInput withSeriesNumber(Integer seriesNumber) {
        this.seriesNumber = seriesNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesSuffix")
    public String seriesSuffix;
    public ReleaseEventForApiContractInput withSeriesSuffix(String seriesSuffix) {
        this.seriesSuffix = seriesSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("songList")
    public SongListBaseContract songList;
    public ReleaseEventForApiContractInput withSongList(SongListBaseContract songList) {
        this.songList = songList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ReleaseEventForApiContractStatusEnum status;
    public ReleaseEventForApiContractInput withStatus(ReleaseEventForApiContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public TagUsageForApiContract[] tags;
    public ReleaseEventForApiContractInput withTags(TagUsageForApiContract[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlSlug")
    public String urlSlug;
    public ReleaseEventForApiContractInput withUrlSlug(String urlSlug) {
        this.urlSlug = urlSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("venue")
    public VenueForApiContractInput venue;
    public ReleaseEventForApiContractInput withVenue(VenueForApiContractInput venue) {
        this.venue = venue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("venueName")
    public String venueName;
    public ReleaseEventForApiContractInput withVenueName(String venueName) {
        this.venueName = venueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public ReleaseEventForApiContractInput withVersion(Integer version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webLinks")
    public WebLinkForApiContract[] webLinks;
    public ReleaseEventForApiContractInput withWebLinks(WebLinkForApiContract[] webLinks) {
        this.webLinks = webLinks;
        return this;
    }
}