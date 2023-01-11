package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SongContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public SongContract withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistString")
    public String artistString;
    public SongContract withArtistString(String artistString) {
        this.artistString = artistString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createDate")
    public OffsetDateTime createDate;
    public SongContract withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public SongContract withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favoritedTimes")
    public Integer favoritedTimes;
    public SongContract withFavoritedTimes(Integer favoritedTimes) {
        this.favoritedTimes = favoritedTimes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public SongContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lengthSeconds")
    public Integer lengthSeconds;
    public SongContract withLengthSeconds(Integer lengthSeconds) {
        this.lengthSeconds = lengthSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SongContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nicoId")
    public String nicoId;
    public SongContract withNicoId(String nicoId) {
        this.nicoId = nicoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishDate")
    public OffsetDateTime publishDate;
    public SongContract withPublishDate(OffsetDateTime publishDate) {
        this.publishDate = publishDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pvServices")
    public SongContractPvServicesEnum pvServices;
    public SongContract withPvServices(SongContractPvServicesEnum pvServices) {
        this.pvServices = pvServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingScore")
    public Integer ratingScore;
    public SongContract withRatingScore(Integer ratingScore) {
        this.ratingScore = ratingScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("songType")
    public SongContractSongTypeEnum songType;
    public SongContract withSongType(SongContractSongTypeEnum songType) {
        this.songType = songType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SongContractStatusEnum status;
    public SongContract withStatus(SongContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbUrl")
    public String thumbUrl;
    public SongContract withThumbUrl(String thumbUrl) {
        this.thumbUrl = thumbUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public SongContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
}