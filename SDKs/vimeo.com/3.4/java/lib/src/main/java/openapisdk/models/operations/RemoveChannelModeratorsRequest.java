package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveChannelModeratorsRequest {
    public RemoveChannelModeratorsPathParams pathParams;
    public RemoveChannelModeratorsRequest withPathParams(RemoveChannelModeratorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.user+json")
    public RemoveChannelModeratorsRequestBody request;
    public RemoveChannelModeratorsRequest withRequest(RemoveChannelModeratorsRequestBody request) {
        this.request = request;
        return this;
    }
    public RemoveChannelModeratorsSecurity security;
    public RemoveChannelModeratorsRequest withSecurity(RemoveChannelModeratorsSecurity security) {
        this.security = security;
        return this;
    }
}