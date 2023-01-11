package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SongForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public SongForApiContract withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("albums")
    public AlbumContract[] albums;
    public SongForApiContract withAlbums(AlbumContract[] albums) {
        this.albums = albums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistString")
    public String artistString;
    public SongForApiContract withArtistString(String artistString) {
        this.artistString = artistString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public ArtistForSongContract[] artists;
    public SongForApiContract withArtists(ArtistForSongContract[] artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createDate")
    public OffsetDateTime createDate;
    public SongForApiContract withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultName")
    public String defaultName;
    public SongForApiContract withDefaultName(String defaultName) {
        this.defaultName = defaultName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultNameLanguage")
    public SongForApiContractDefaultNameLanguageEnum defaultNameLanguage;
    public SongForApiContract withDefaultNameLanguage(SongForApiContractDefaultNameLanguageEnum defaultNameLanguage) {
        this.defaultNameLanguage = defaultNameLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public SongForApiContract withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favoritedTimes")
    public Integer favoritedTimes;
    public SongForApiContract withFavoritedTimes(Integer favoritedTimes) {
        this.favoritedTimes = favoritedTimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public SongForApiContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lengthSeconds")
    public Integer lengthSeconds;
    public SongForApiContract withLengthSeconds(Integer lengthSeconds) {
        this.lengthSeconds = lengthSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lyrics")
    public LyricsForSongContract[] lyrics;
    public SongForApiContract withLyrics(LyricsForSongContract[] lyrics) {
        this.lyrics = lyrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainPicture")
    public EntryThumbForApiContract mainPicture;
    public SongForApiContract withMainPicture(EntryThumbForApiContract mainPicture) {
        this.mainPicture = mainPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergedTo")
    public Integer mergedTo;
    public SongForApiContract withMergedTo(Integer mergedTo) {
        this.mergedTo = mergedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SongForApiContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public LocalizedStringContract[] names;
    public SongForApiContract withNames(LocalizedStringContract[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalVersionId")
    public Integer originalVersionId;
    public SongForApiContract withOriginalVersionId(Integer originalVersionId) {
        this.originalVersionId = originalVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishDate")
    public OffsetDateTime publishDate;
    public SongForApiContract withPublishDate(OffsetDateTime publishDate) {
        this.publishDate = publishDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pvServices")
    public SongForApiContractPvServicesEnum pvServices;
    public SongForApiContract withPvServices(SongForApiContractPvServicesEnum pvServices) {
        this.pvServices = pvServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pvs")
    public PvContract[] pvs;
    public SongForApiContract withPvs(PvContract[] pvs) {
        this.pvs = pvs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingScore")
    public Integer ratingScore;
    public SongForApiContract withRatingScore(Integer ratingScore) {
        this.ratingScore = ratingScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseEvent")
    public ReleaseEventForApiContract releaseEvent;
    public SongForApiContract withReleaseEvent(ReleaseEventForApiContract releaseEvent) {
        this.releaseEvent = releaseEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("songType")
    public SongForApiContractSongTypeEnum songType;
    public SongForApiContract withSongType(SongForApiContractSongTypeEnum songType) {
        this.songType = songType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SongForApiContractStatusEnum status;
    public SongForApiContract withStatus(SongForApiContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public TagUsageForApiContract[] tags;
    public SongForApiContract withTags(TagUsageForApiContract[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbUrl")
    public String thumbUrl;
    public SongForApiContract withThumbUrl(String thumbUrl) {
        this.thumbUrl = thumbUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public SongForApiContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webLinks")
    public WebLinkForApiContract[] webLinks;
    public SongForApiContract withWebLinks(WebLinkForApiContract[] webLinks) {
        this.webLinks = webLinks;
        return this;
    }
}