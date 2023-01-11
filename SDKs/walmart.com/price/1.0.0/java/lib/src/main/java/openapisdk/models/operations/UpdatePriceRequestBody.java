package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePriceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definitions")
    public java.util.Map<String, Object> definitions;
    public UpdatePriceRequestBody withDefinitions(java.util.Map<String, Object> definitions) {
        this.definitions = definitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public String offerId;
    public UpdatePriceRequestBody withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonProperty("pricing")
    public UpdatePriceRequestBodyPricing[] pricing;
    public UpdatePriceRequestBody withPricing(UpdatePriceRequestBodyPricing[] pricing) {
        this.pricing = pricing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replaceAll")
    public UpdatePriceRequestBodyReplaceAllEnum replaceAll;
    public UpdatePriceRequestBody withReplaceAll(UpdatePriceRequestBodyReplaceAllEnum replaceAll) {
        this.replaceAll = replaceAll;
        return this;
    }
    @JsonProperty("sku")
    public String sku;
    public UpdatePriceRequestBody withSku(String sku) {
        this.sku = sku;
        return this;
    }
}