package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetVodRegionsRequest {
    public SetVodRegionsPathParams pathParams;
    public SetVodRegionsRequest withPathParams(SetVodRegionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.ondemand.region+json")
    public SetVodRegionsRequestBody request;
    public SetVodRegionsRequest withRequest(SetVodRegionsRequestBody request) {
        this.request = request;
        return this;
    }
    public SetVodRegionsSecurity security;
    public SetVodRegionsRequest withSecurity(SetVodRegionsSecurity security) {
        this.security = security;
        return this;
    }
}