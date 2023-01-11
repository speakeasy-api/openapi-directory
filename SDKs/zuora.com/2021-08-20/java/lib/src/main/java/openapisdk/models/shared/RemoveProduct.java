package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveProduct
 * Information about an order action of type `RemoveProduct`.
 * 
**/
public class RemoveProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePlanId")
    public String ratePlanId;
    public RemoveProduct withRatePlanId(String ratePlanId) {
        this.ratePlanId = ratePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public RemoveProduct withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}