package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditMemoItemsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public GetCreditMemoItemsHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public GetCreditMemoItemsHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=zuora-version")
    public String zuoraVersion;
    public GetCreditMemoItemsHeaders withZuoraVersion(String zuoraVersion) {
        this.zuoraVersion = zuoraVersion;
        return this;
    }
}