package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRefundPaymentHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public PostRefundPaymentHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public PostRefundPaymentHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}