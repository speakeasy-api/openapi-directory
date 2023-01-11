package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AlbumContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public AlbumContract withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistString")
    public String artistString;
    public AlbumContract withArtistString(String artistString) {
        this.artistString = artistString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverPictureMime")
    public String coverPictureMime;
    public AlbumContract withCoverPictureMime(String coverPictureMime) {
        this.coverPictureMime = coverPictureMime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createDate")
    public OffsetDateTime createDate;
    public AlbumContract withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public AlbumContract withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discType")
    public AlbumContractDiscTypeEnum discType;
    public AlbumContract withDiscType(AlbumContractDiscTypeEnum discType) {
        this.discType = discType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public AlbumContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AlbumContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingAverage")
    public Double ratingAverage;
    public AlbumContract withRatingAverage(Double ratingAverage) {
        this.ratingAverage = ratingAverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingCount")
    public Integer ratingCount;
    public AlbumContract withRatingCount(Integer ratingCount) {
        this.ratingCount = ratingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseDate")
    public OptionalDateTimeContract releaseDate;
    public AlbumContract withReleaseDate(OptionalDateTimeContract releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseEvent")
    public ReleaseEventForApiContract releaseEvent;
    public AlbumContract withReleaseEvent(ReleaseEventForApiContract releaseEvent) {
        this.releaseEvent = releaseEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AlbumContractStatusEnum status;
    public AlbumContract withStatus(AlbumContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public AlbumContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
}