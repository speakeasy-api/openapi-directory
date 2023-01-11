package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SongForApiContractInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public SongForApiContractInput withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("albums")
    public AlbumContractInput[] albums;
    public SongForApiContractInput withAlbums(AlbumContractInput[] albums) {
        this.albums = albums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistString")
    public String artistString;
    public SongForApiContractInput withArtistString(String artistString) {
        this.artistString = artistString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public ArtistForSongContract[] artists;
    public SongForApiContractInput withArtists(ArtistForSongContract[] artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createDate")
    public OffsetDateTime createDate;
    public SongForApiContractInput withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultName")
    public String defaultName;
    public SongForApiContractInput withDefaultName(String defaultName) {
        this.defaultName = defaultName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultNameLanguage")
    public SongForApiContractDefaultNameLanguageEnum defaultNameLanguage;
    public SongForApiContractInput withDefaultNameLanguage(SongForApiContractDefaultNameLanguageEnum defaultNameLanguage) {
        this.defaultNameLanguage = defaultNameLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public SongForApiContractInput withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favoritedTimes")
    public Integer favoritedTimes;
    public SongForApiContractInput withFavoritedTimes(Integer favoritedTimes) {
        this.favoritedTimes = favoritedTimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public SongForApiContractInput withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lengthSeconds")
    public Integer lengthSeconds;
    public SongForApiContractInput withLengthSeconds(Integer lengthSeconds) {
        this.lengthSeconds = lengthSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lyrics")
    public LyricsForSongContract[] lyrics;
    public SongForApiContractInput withLyrics(LyricsForSongContract[] lyrics) {
        this.lyrics = lyrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainPicture")
    public EntryThumbForApiContract mainPicture;
    public SongForApiContractInput withMainPicture(EntryThumbForApiContract mainPicture) {
        this.mainPicture = mainPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergedTo")
    public Integer mergedTo;
    public SongForApiContractInput withMergedTo(Integer mergedTo) {
        this.mergedTo = mergedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SongForApiContractInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public LocalizedStringContract[] names;
    public SongForApiContractInput withNames(LocalizedStringContract[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalVersionId")
    public Integer originalVersionId;
    public SongForApiContractInput withOriginalVersionId(Integer originalVersionId) {
        this.originalVersionId = originalVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishDate")
    public OffsetDateTime publishDate;
    public SongForApiContractInput withPublishDate(OffsetDateTime publishDate) {
        this.publishDate = publishDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pvServices")
    public SongForApiContractPvServicesEnum pvServices;
    public SongForApiContractInput withPvServices(SongForApiContractPvServicesEnum pvServices) {
        this.pvServices = pvServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pvs")
    public PvContract[] pvs;
    public SongForApiContractInput withPvs(PvContract[] pvs) {
        this.pvs = pvs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingScore")
    public Integer ratingScore;
    public SongForApiContractInput withRatingScore(Integer ratingScore) {
        this.ratingScore = ratingScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseEvent")
    public ReleaseEventForApiContractInput releaseEvent;
    public SongForApiContractInput withReleaseEvent(ReleaseEventForApiContractInput releaseEvent) {
        this.releaseEvent = releaseEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("songType")
    public SongForApiContractSongTypeEnum songType;
    public SongForApiContractInput withSongType(SongForApiContractSongTypeEnum songType) {
        this.songType = songType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SongForApiContractStatusEnum status;
    public SongForApiContractInput withStatus(SongForApiContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public TagUsageForApiContract[] tags;
    public SongForApiContractInput withTags(TagUsageForApiContract[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbUrl")
    public String thumbUrl;
    public SongForApiContractInput withThumbUrl(String thumbUrl) {
        this.thumbUrl = thumbUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public SongForApiContractInput withVersion(Integer version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webLinks")
    public WebLinkForApiContract[] webLinks;
    public SongForApiContractInput withWebLinks(WebLinkForApiContract[] webLinks) {
        this.webLinks = webLinks;
        return this;
    }
}