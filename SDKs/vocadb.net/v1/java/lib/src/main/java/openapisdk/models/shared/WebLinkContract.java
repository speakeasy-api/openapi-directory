package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebLinkContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public WebLinkContractCategoryEnum category;
    public WebLinkContract withCategory(WebLinkContractCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WebLinkContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptionOrUrl")
    public String descriptionOrUrl;
    public WebLinkContract withDescriptionOrUrl(String descriptionOrUrl) {
        this.descriptionOrUrl = descriptionOrUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public WebLinkContract withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public WebLinkContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public WebLinkContract withUrl(String url) {
        this.url = url;
        return this;
    }
}