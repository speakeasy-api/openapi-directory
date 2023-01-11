package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebLinkForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public WebLinkForApiContractCategoryEnum category;
    public WebLinkForApiContract withCategory(WebLinkForApiContractCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WebLinkForApiContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptionOrUrl")
    public String descriptionOrUrl;
    public WebLinkForApiContract withDescriptionOrUrl(String descriptionOrUrl) {
        this.descriptionOrUrl = descriptionOrUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public WebLinkForApiContract withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public WebLinkForApiContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public WebLinkForApiContract withUrl(String url) {
        this.url = url;
        return this;
    }
}