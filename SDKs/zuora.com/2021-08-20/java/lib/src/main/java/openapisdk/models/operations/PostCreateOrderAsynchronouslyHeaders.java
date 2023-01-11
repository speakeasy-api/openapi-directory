package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateOrderAsynchronouslyHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public PostCreateOrderAsynchronouslyHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public PostCreateOrderAsynchronouslyHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=zuora-version")
    public String zuoraVersion;
    public PostCreateOrderAsynchronouslyHeaders withZuoraVersion(String zuoraVersion) {
        this.zuoraVersion = zuoraVersion;
        return this;
    }
}