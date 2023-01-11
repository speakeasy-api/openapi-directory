package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AlbumContractInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public AlbumContractInput withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistString")
    public String artistString;
    public AlbumContractInput withArtistString(String artistString) {
        this.artistString = artistString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverPictureMime")
    public String coverPictureMime;
    public AlbumContractInput withCoverPictureMime(String coverPictureMime) {
        this.coverPictureMime = coverPictureMime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createDate")
    public OffsetDateTime createDate;
    public AlbumContractInput withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public AlbumContractInput withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discType")
    public AlbumContractDiscTypeEnum discType;
    public AlbumContractInput withDiscType(AlbumContractDiscTypeEnum discType) {
        this.discType = discType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public AlbumContractInput withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AlbumContractInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingAverage")
    public Double ratingAverage;
    public AlbumContractInput withRatingAverage(Double ratingAverage) {
        this.ratingAverage = ratingAverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingCount")
    public Integer ratingCount;
    public AlbumContractInput withRatingCount(Integer ratingCount) {
        this.ratingCount = ratingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseDate")
    public OptionalDateTimeContract releaseDate;
    public AlbumContractInput withReleaseDate(OptionalDateTimeContract releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseEvent")
    public ReleaseEventForApiContractInput releaseEvent;
    public AlbumContractInput withReleaseEvent(ReleaseEventForApiContractInput releaseEvent) {
        this.releaseEvent = releaseEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AlbumContractStatusEnum status;
    public AlbumContractInput withStatus(AlbumContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public AlbumContractInput withVersion(Integer version) {
        this.version = version;
        return this;
    }
}