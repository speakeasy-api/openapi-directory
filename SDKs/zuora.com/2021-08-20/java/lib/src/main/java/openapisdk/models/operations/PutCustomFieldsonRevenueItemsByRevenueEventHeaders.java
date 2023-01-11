package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCustomFieldsonRevenueItemsByRevenueEventHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public PutCustomFieldsonRevenueItemsByRevenueEventHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public PutCustomFieldsonRevenueItemsByRevenueEventHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}