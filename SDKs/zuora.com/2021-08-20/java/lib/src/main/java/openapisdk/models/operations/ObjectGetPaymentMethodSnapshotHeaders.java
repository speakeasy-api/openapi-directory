package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetPaymentMethodSnapshotHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public ObjectGetPaymentMethodSnapshotHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public ObjectGetPaymentMethodSnapshotHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}