package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReleaseEventSeriesForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public ReleaseEventSeriesForApiContract withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public ReleaseEventSeriesForApiContractCategoryEnum category;
    public ReleaseEventSeriesForApiContract withCategory(ReleaseEventSeriesForApiContractCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReleaseEventSeriesForApiContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public ReleaseEventForApiContract[] events;
    public ReleaseEventSeriesForApiContract withEvents(ReleaseEventForApiContract[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ReleaseEventSeriesForApiContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainPicture")
    public EntryThumbForApiContract mainPicture;
    public ReleaseEventSeriesForApiContract withMainPicture(EntryThumbForApiContract mainPicture) {
        this.mainPicture = mainPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReleaseEventSeriesForApiContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public LocalizedStringContract[] names;
    public ReleaseEventSeriesForApiContract withNames(LocalizedStringContract[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ReleaseEventSeriesForApiContractStatusEnum status;
    public ReleaseEventSeriesForApiContract withStatus(ReleaseEventSeriesForApiContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlSlug")
    public String urlSlug;
    public ReleaseEventSeriesForApiContract withUrlSlug(String urlSlug) {
        this.urlSlug = urlSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public ReleaseEventSeriesForApiContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webLinks")
    public WebLinkForApiContract[] webLinks;
    public ReleaseEventSeriesForApiContract withWebLinks(WebLinkForApiContract[] webLinks) {
        this.webLinks = webLinks;
        return this;
    }
}