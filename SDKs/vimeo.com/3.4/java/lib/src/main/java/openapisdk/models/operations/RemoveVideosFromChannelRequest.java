package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveVideosFromChannelRequest {
    public RemoveVideosFromChannelPathParams pathParams;
    public RemoveVideosFromChannelRequest withPathParams(RemoveVideosFromChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveVideosFromChannelRequestBody request;
    public RemoveVideosFromChannelRequest withRequest(RemoveVideosFromChannelRequestBody request) {
        this.request = request;
        return this;
    }
    public RemoveVideosFromChannelSecurity security;
    public RemoveVideosFromChannelRequest withSecurity(RemoveVideosFromChannelSecurity security) {
        this.security = security;
        return this;
    }
}