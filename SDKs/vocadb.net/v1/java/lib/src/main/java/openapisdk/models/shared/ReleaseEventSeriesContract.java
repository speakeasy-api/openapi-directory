package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReleaseEventSeriesContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalNames")
    public String additionalNames;
    public ReleaseEventSeriesContract withAdditionalNames(String additionalNames) {
        this.additionalNames = additionalNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public ReleaseEventSeriesContractCategoryEnum category;
    public ReleaseEventSeriesContract withCategory(ReleaseEventSeriesContractCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public ReleaseEventSeriesContract withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReleaseEventSeriesContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ReleaseEventSeriesContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReleaseEventSeriesContract withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pictureMime")
    public String pictureMime;
    public ReleaseEventSeriesContract withPictureMime(String pictureMime) {
        this.pictureMime = pictureMime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ReleaseEventSeriesContractStatusEnum status;
    public ReleaseEventSeriesContract withStatus(ReleaseEventSeriesContractStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlSlug")
    public String urlSlug;
    public ReleaseEventSeriesContract withUrlSlug(String urlSlug) {
        this.urlSlug = urlSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public ReleaseEventSeriesContract withVersion(Integer version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webLinks")
    public WebLinkContract[] webLinks;
    public ReleaseEventSeriesContract withWebLinks(WebLinkContract[] webLinks) {
        this.webLinks = webLinks;
        return this;
    }
}