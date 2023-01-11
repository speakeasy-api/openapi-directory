package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRSbyProductChargeAndBillingAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-key")
    public String accountKey;
    public GetRSbyProductChargeAndBillingAccountPathParams withAccountKey(String accountKey) {
        this.accountKey = accountKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=charge-key")
    public String chargeKey;
    public GetRSbyProductChargeAndBillingAccountPathParams withChargeKey(String chargeKey) {
        this.chargeKey = chargeKey;
        return this;
    }
}