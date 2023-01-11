package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscriptionsByKeyAndVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=charge-detail")
    public String chargeDetail;
    public GetSubscriptionsByKeyAndVersionQueryParams withChargeDetail(String chargeDetail) {
        this.chargeDetail = chargeDetail;
        return this;
    }
}