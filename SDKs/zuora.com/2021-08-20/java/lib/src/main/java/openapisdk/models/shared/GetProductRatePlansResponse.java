package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetProductRatePlansResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetProductRatePlansResponse withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productRatePlans")
    public java.util.Map<String, Object>[] productRatePlans;
    public GetProductRatePlansResponse withProductRatePlans(java.util.Map<String, Object>[] productRatePlans) {
        this.productRatePlans = productRatePlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetProductRatePlansResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}