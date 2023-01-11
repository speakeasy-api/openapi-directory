package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupListResult
 * Server response for Get tenant groups API call
**/
public class GroupListResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("odata.nextLink")
    public String odataNextLink;
    public GroupListResult withOdataNextLink(String odataNextLink) {
        this.odataNextLink = odataNextLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, java.util.Map<String, Object>>[] value;
    public GroupListResult withValue(java.util.Map<String, java.util.Map<String, Object>>[] value) {
        this.value = value;
        return this;
    }
}