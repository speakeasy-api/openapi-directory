package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArchivedWebLinkContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public ArchivedWebLinkContractCategoryEnum category;
    public ArchivedWebLinkContract withCategory(ArchivedWebLinkContractCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ArchivedWebLinkContract withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public ArchivedWebLinkContract withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ArchivedWebLinkContract withUrl(String url) {
        this.url = url;
        return this;
    }
}