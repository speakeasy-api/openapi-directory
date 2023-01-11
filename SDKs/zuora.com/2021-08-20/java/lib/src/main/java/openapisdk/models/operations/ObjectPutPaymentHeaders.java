package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutPaymentHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public ObjectPutPaymentHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public ObjectPutPaymentHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}