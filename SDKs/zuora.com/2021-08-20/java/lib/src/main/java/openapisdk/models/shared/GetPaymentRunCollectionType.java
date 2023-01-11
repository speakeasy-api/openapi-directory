package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPaymentRunCollectionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetPaymentRunCollectionType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentRuns")
    public GetPaymentRunType[] paymentRuns;
    public GetPaymentRunCollectionType withPaymentRuns(GetPaymentRunType[] paymentRuns) {
        this.paymentRuns = paymentRuns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetPaymentRunCollectionType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}