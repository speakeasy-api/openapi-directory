package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OAuth2PermissionGrantListResult
 * Server response for get oauth2 permissions grants
**/
public class OAuth2PermissionGrantListResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("odata.nextLink")
    public String odataNextLink;
    public OAuth2PermissionGrantListResult withOdataNextLink(String odataNextLink) {
        this.odataNextLink = odataNextLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Object[] value;
    public OAuth2PermissionGrantListResult withValue(Object[] value) {
        this.value = value;
        return this;
    }
}