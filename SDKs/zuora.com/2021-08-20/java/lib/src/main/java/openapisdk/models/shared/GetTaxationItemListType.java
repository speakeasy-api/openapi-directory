package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTaxationItemListType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetTaxationItemListType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxationItems")
    public java.util.Map<String, Object>[] taxationItems;
    public GetTaxationItemListType withTaxationItems(java.util.Map<String, Object>[] taxationItems) {
        this.taxationItems = taxationItems;
        return this;
    }
}