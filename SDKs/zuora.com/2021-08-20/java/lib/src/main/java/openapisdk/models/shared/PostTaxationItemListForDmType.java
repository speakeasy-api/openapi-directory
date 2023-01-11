package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostTaxationItemListForDmType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxationItems")
    public java.util.Map<String, Object>[] taxationItems;
    public PostTaxationItemListForDmType withTaxationItems(java.util.Map<String, Object>[] taxationItems) {
        this.taxationItems = taxationItems;
        return this;
    }
}