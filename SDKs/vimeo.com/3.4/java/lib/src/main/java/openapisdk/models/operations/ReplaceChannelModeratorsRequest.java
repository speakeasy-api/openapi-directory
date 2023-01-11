package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceChannelModeratorsRequest {
    public ReplaceChannelModeratorsPathParams pathParams;
    public ReplaceChannelModeratorsRequest withPathParams(ReplaceChannelModeratorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReplaceChannelModeratorsRequestBody request;
    public ReplaceChannelModeratorsRequest withRequest(ReplaceChannelModeratorsRequestBody request) {
        this.request = request;
        return this;
    }
    public ReplaceChannelModeratorsSecurity security;
    public ReplaceChannelModeratorsRequest withSecurity(ReplaceChannelModeratorsSecurity security) {
        this.security = security;
        return this;
    }
}