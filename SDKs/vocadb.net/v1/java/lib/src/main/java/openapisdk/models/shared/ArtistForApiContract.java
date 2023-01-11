package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ArtistForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public ArtistForApiContract withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistLinks")
    public ArtistForArtistForApiContract[] artistLinks;
    public ArtistForApiContract withArtistLinks(ArtistForArtistForApiContract[] artistLinks) {
        this.artistLinks = artistLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistLinksReverse")
    public ArtistForArtistForApiContract[] artistLinksReverse;
    public ArtistForApiContract withArtistLinksReverse(ArtistForArtistForApiContract[] artistLinksReverse) {
        this.artistLinksReverse = artistLinksReverse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistType")
    public ArtistForApiContractArtistTypeEnum artistType;
    public ArtistForApiContract withArtistType(ArtistForApiContractArtistTypeEnum artistType) {
        this.artistType = artistType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseVoicebank")
    public ArtistContract baseVoicebank;
    public ArtistForApiContract withBaseVoicebank(ArtistContract baseVoicebank) {
        this.baseVoicebank = baseVoicebank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createDate")
    public OffsetDateTime createDate;
    public ArtistForApiContract withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultName")
    public String defaultName;
    public ArtistForApiContract withDefaultName(String defaultName) {
        this.defaultName = defaultName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultNameLanguage")
    public ArtistForApiContractDefaultNameLanguageEnum defaultNameLanguage;
    public ArtistForApiContract withDefaultNameLanguage(ArtistForApiContractDefaultNameLanguageEnum defaultNameLanguage) {
        this.defaultNameLanguage = defaultNameLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public ArtistForApiContract withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ArtistForApiContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ArtistForApiContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainPicture")
    public EntryThumbForApiContract mainPicture;
    public ArtistForApiContract withMainPicture(EntryThumbForApiContract mainPicture) {
        this.mainPicture = mainPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergedTo")
    public Integer mergedTo;
    public ArtistForApiContract withMergedTo(Integer mergedTo) {
        this.mergedTo = mergedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ArtistForApiContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public LocalizedStringContract[] names;
    public ArtistForApiContract withNames(LocalizedStringContract[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pictureMime")
    public String pictureMime;
    public ArtistForApiContract withPictureMime(String pictureMime) {
        this.pictureMime = pictureMime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relations")
    public ArtistRelationsForApi relations;
    public ArtistForApiContract withRelations(ArtistRelationsForApi relations) {
        this.relations = relations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("releaseDate")
    public OffsetDateTime releaseDate;
    public ArtistForApiContract withReleaseDate(OffsetDateTime releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ArtistForApiContractStatusEnum status;
    public ArtistForApiContract withStatus(ArtistForApiContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public TagUsageForApiContract[] tags;
    public ArtistForApiContract withTags(TagUsageForApiContract[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public ArtistForApiContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webLinks")
    public WebLinkForApiContract[] webLinks;
    public ArtistForApiContract withWebLinks(WebLinkForApiContract[] webLinks) {
        this.webLinks = webLinks;
        return this;
    }
}