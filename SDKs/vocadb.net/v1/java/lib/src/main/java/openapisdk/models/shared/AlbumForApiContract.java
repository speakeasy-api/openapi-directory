package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AlbumForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public AlbumForApiContract withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistString")
    public String artistString;
    public AlbumForApiContract withArtistString(String artistString) {
        this.artistString = artistString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public ArtistForAlbumForApiContract[] artists;
    public AlbumForApiContract withArtists(ArtistForAlbumForApiContract[] artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcode")
    public String barcode;
    public AlbumForApiContract withBarcode(String barcode) {
        this.barcode = barcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogNumber")
    public String catalogNumber;
    public AlbumForApiContract withCatalogNumber(String catalogNumber) {
        this.catalogNumber = catalogNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createDate")
    public OffsetDateTime createDate;
    public AlbumForApiContract withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultName")
    public String defaultName;
    public AlbumForApiContract withDefaultName(String defaultName) {
        this.defaultName = defaultName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultNameLanguage")
    public AlbumForApiContractDefaultNameLanguageEnum defaultNameLanguage;
    public AlbumForApiContract withDefaultNameLanguage(AlbumForApiContractDefaultNameLanguageEnum defaultNameLanguage) {
        this.defaultNameLanguage = defaultNameLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public AlbumForApiContract withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AlbumForApiContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discType")
    public AlbumForApiContractDiscTypeEnum discType;
    public AlbumForApiContract withDiscType(AlbumForApiContractDiscTypeEnum discType) {
        this.discType = discType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discs")
    public AlbumDiscPropertiesContract[] discs;
    public AlbumForApiContract withDiscs(AlbumDiscPropertiesContract[] discs) {
        this.discs = discs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public AlbumForApiContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifiers")
    public AlbumIdentifierContract[] identifiers;
    public AlbumForApiContract withIdentifiers(AlbumIdentifierContract[] identifiers) {
        this.identifiers = identifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainPicture")
    public EntryThumbForApiContract mainPicture;
    public AlbumForApiContract withMainPicture(EntryThumbForApiContract mainPicture) {
        this.mainPicture = mainPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergedTo")
    public Integer mergedTo;
    public AlbumForApiContract withMergedTo(Integer mergedTo) {
        this.mergedTo = mergedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AlbumForApiContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public LocalizedStringContract[] names;
    public AlbumForApiContract withNames(LocalizedStringContract[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pvs")
    public PvContract[] pvs;
    public AlbumForApiContract withPvs(PvContract[] pvs) {
        this.pvs = pvs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingAverage")
    public Double ratingAverage;
    public AlbumForApiContract withRatingAverage(Double ratingAverage) {
        this.ratingAverage = ratingAverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingCount")
    public Integer ratingCount;
    public AlbumForApiContract withRatingCount(Integer ratingCount) {
        this.ratingCount = ratingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseDate")
    public OptionalDateTimeContract releaseDate;
    public AlbumForApiContract withReleaseDate(OptionalDateTimeContract releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseEvent")
    public ReleaseEventForApiContract releaseEvent;
    public AlbumForApiContract withReleaseEvent(ReleaseEventForApiContract releaseEvent) {
        this.releaseEvent = releaseEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AlbumForApiContractStatusEnum status;
    public AlbumForApiContract withStatus(AlbumForApiContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public TagUsageForApiContract[] tags;
    public AlbumForApiContract withTags(TagUsageForApiContract[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracks")
    public SongInAlbumForApiContract[] tracks;
    public AlbumForApiContract withTracks(SongInAlbumForApiContract[] tracks) {
        this.tracks = tracks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public AlbumForApiContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webLinks")
    public WebLinkForApiContract[] webLinks;
    public AlbumForApiContract withWebLinks(WebLinkForApiContract[] webLinks) {
        this.webLinks = webLinks;
        return this;
    }
}