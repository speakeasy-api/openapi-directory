package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderRatePlanUpdate
 * Information about an order action of type `UpdateProduct`.
 * 
**/
public class CreateOrderRatePlanUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeUpdates")
    public CreateOrderChargeUpdate[] chargeUpdates;
    public CreateOrderRatePlanUpdate withChargeUpdates(CreateOrderChargeUpdate[] chargeUpdates) {
        this.chargeUpdates = chargeUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public CreateOrderRatePlanUpdate withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePlanId")
    public String ratePlanId;
    public CreateOrderRatePlanUpdate withRatePlanId(String ratePlanId) {
        this.ratePlanId = ratePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificUpdateDate")
    public LocalDate specificUpdateDate;
    public CreateOrderRatePlanUpdate withSpecificUpdateDate(LocalDate specificUpdateDate) {
        this.specificUpdateDate = specificUpdateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public CreateOrderRatePlanUpdate withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}