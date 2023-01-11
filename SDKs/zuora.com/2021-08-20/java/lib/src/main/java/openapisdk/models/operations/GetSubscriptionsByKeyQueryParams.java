package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscriptionsByKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=charge-detail")
    public String chargeDetail;
    public GetSubscriptionsByKeyQueryParams withChargeDetail(String chargeDetail) {
        this.chargeDetail = chargeDetail;
        return this;
    }
}