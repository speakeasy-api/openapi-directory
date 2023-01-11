package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRenewSubscriptionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public PutRenewSubscriptionHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public PutRenewSubscriptionHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=zuora-version")
    public String zuoraVersion;
    public PutRenewSubscriptionHeaders withZuoraVersion(String zuoraVersion) {
        this.zuoraVersion = zuoraVersion;
        return this;
    }
}