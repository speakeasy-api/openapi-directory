package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRebalanceDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rebalance_request_id")
    public String rebalanceRequestId;
    public GetRebalanceDetailsPathParams withRebalanceRequestId(String rebalanceRequestId) {
        this.rebalanceRequestId = rebalanceRequestId;
        return this;
    }
}