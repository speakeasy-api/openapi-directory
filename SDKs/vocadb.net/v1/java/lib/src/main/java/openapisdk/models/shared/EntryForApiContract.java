package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class EntryForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("activityDate")
    public OffsetDateTime activityDate;
    public EntryForApiContract withActivityDate(OffsetDateTime activityDate) {
        this.activityDate = activityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public EntryForApiContract withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistString")
    public String artistString;
    public EntryForApiContract withArtistString(String artistString) {
        this.artistString = artistString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artistType")
    public EntryForApiContractArtistTypeEnum artistType;
    public EntryForApiContract withArtistType(EntryForApiContractArtistTypeEnum artistType) {
        this.artistType = artistType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createDate")
    public OffsetDateTime createDate;
    public EntryForApiContract withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultName")
    public String defaultName;
    public EntryForApiContract withDefaultName(String defaultName) {
        this.defaultName = defaultName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultNameLanguage")
    public EntryForApiContractDefaultNameLanguageEnum defaultNameLanguage;
    public EntryForApiContract withDefaultNameLanguage(EntryForApiContractDefaultNameLanguageEnum defaultNameLanguage) {
        this.defaultNameLanguage = defaultNameLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EntryForApiContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discType")
    public EntryForApiContractDiscTypeEnum discType;
    public EntryForApiContract withDiscType(EntryForApiContractDiscTypeEnum discType) {
        this.discType = discType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryType")
    public EntryForApiContractEntryTypeEnum entryType;
    public EntryForApiContract withEntryType(EntryForApiContractEntryTypeEnum entryType) {
        this.entryType = entryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventCategory")
    public EntryForApiContractEventCategoryEnum eventCategory;
    public EntryForApiContract withEventCategory(EntryForApiContractEventCategoryEnum eventCategory) {
        this.eventCategory = eventCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public EntryForApiContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainPicture")
    public EntryThumbForApiContract mainPicture;
    public EntryForApiContract withMainPicture(EntryThumbForApiContract mainPicture) {
        this.mainPicture = mainPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EntryForApiContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public LocalizedStringContract[] names;
    public EntryForApiContract withNames(LocalizedStringContract[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pVs")
    public PvContract[] pVs;
    public EntryForApiContract withPVs(PvContract[] pVs) {
        this.pVs = pVs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseEventSeriesName")
    public String releaseEventSeriesName;
    public EntryForApiContract withReleaseEventSeriesName(String releaseEventSeriesName) {
        this.releaseEventSeriesName = releaseEventSeriesName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("songListFeaturedCategory")
    public EntryForApiContractSongListFeaturedCategoryEnum songListFeaturedCategory;
    public EntryForApiContract withSongListFeaturedCategory(EntryForApiContractSongListFeaturedCategoryEnum songListFeaturedCategory) {
        this.songListFeaturedCategory = songListFeaturedCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("songType")
    public EntryForApiContractSongTypeEnum songType;
    public EntryForApiContract withSongType(EntryForApiContractSongTypeEnum songType) {
        this.songType = songType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public EntryForApiContractStatusEnum status;
    public EntryForApiContract withStatus(EntryForApiContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagCategoryName")
    public String tagCategoryName;
    public EntryForApiContract withTagCategoryName(String tagCategoryName) {
        this.tagCategoryName = tagCategoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public TagUsageForApiContract[] tags;
    public EntryForApiContract withTags(TagUsageForApiContract[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlSlug")
    public String urlSlug;
    public EntryForApiContract withUrlSlug(String urlSlug) {
        this.urlSlug = urlSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public EntryForApiContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webLinks")
    public ArchivedWebLinkContract[] webLinks;
    public EntryForApiContract withWebLinks(ArchivedWebLinkContract[] webLinks) {
        this.webLinks = webLinks;
        return this;
    }
}