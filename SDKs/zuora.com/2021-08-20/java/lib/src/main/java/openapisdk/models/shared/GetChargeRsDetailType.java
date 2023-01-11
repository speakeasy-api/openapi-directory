package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChargeRsDetailType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public GetChargeRsDetailType withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public GetChargeRsDetailType withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public GetChargeRsDetailType withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public GetChargeRsDetailType withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public GetChargeRsDetailType withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recognitionRuleName")
    public String recognitionRuleName;
    public GetChargeRsDetailType withRecognitionRuleName(String recognitionRuleName) {
        this.recognitionRuleName = recognitionRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recognizedRevenue")
    public String recognizedRevenue;
    public GetChargeRsDetailType withRecognizedRevenue(String recognizedRevenue) {
        this.recognizedRevenue = recognizedRevenue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueItems")
    public GetRevenueItemTypeResponse[] revenueItems;
    public GetChargeRsDetailType withRevenueItems(GetRevenueItemTypeResponse[] revenueItems) {
        this.revenueItems = revenueItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionChargeId")
    public String subscriptionChargeId;
    public GetChargeRsDetailType withSubscriptionChargeId(String subscriptionChargeId) {
        this.subscriptionChargeId = subscriptionChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public GetChargeRsDetailType withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetChargeRsDetailType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("undistributedUnrecognizedRevenue")
    public String undistributedUnrecognizedRevenue;
    public GetChargeRsDetailType withUndistributedUnrecognizedRevenue(String undistributedUnrecognizedRevenue) {
        this.undistributedUnrecognizedRevenue = undistributedUnrecognizedRevenue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unrecognizedRevenue")
    public String unrecognizedRevenue;
    public GetChargeRsDetailType withUnrecognizedRevenue(String unrecognizedRevenue) {
        this.unrecognizedRevenue = unrecognizedRevenue;
        return this;
    }
}