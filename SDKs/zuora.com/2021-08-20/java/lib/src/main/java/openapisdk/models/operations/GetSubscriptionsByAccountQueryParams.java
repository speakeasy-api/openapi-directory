package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscriptionsByAccountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=charge-detail")
    public String chargeDetail;
    public GetSubscriptionsByAccountQueryParams withChargeDetail(String chargeDetail) {
        this.chargeDetail = chargeDetail;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetSubscriptionsByAccountQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}