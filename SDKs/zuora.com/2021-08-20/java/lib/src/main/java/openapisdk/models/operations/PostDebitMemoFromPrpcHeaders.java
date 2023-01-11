package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDebitMemoFromPrpcHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public PostDebitMemoFromPrpcHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public PostDebitMemoFromPrpcHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=zuora-version")
    public String zuoraVersion;
    public PostDebitMemoFromPrpcHeaders withZuoraVersion(String zuoraVersion) {
        this.zuoraVersion = zuoraVersion;
        return this;
    }
}