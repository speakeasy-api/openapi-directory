package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforInvoiceItemAdjustmentManualDistributionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public PostRSforInvoiceItemAdjustmentManualDistributionHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public PostRSforInvoiceItemAdjustmentManualDistributionHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}