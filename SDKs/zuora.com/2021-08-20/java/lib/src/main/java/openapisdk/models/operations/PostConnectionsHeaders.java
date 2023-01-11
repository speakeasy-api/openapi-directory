package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConnectionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public PostConnectionsHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public PostConnectionsHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public PostConnectionsHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiAccessKeyId")
    public String apiAccessKeyId;
    public PostConnectionsHeaders withApiAccessKeyId(String apiAccessKeyId) {
        this.apiAccessKeyId = apiAccessKeyId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=apiSecretAccessKey")
    public String apiSecretAccessKey;
    public PostConnectionsHeaders withApiSecretAccessKey(String apiSecretAccessKey) {
        this.apiSecretAccessKey = apiSecretAccessKey;
        return this;
    }
}