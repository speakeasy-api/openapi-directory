package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetChannelPrivacyUsersRequest {
    public SetChannelPrivacyUsersPathParams pathParams;
    public SetChannelPrivacyUsersRequest withPathParams(SetChannelPrivacyUsersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.user+json")
    public SetChannelPrivacyUsersRequestBody request;
    public SetChannelPrivacyUsersRequest withRequest(SetChannelPrivacyUsersRequestBody request) {
        this.request = request;
        return this;
    }
    public SetChannelPrivacyUsersSecurity security;
    public SetChannelPrivacyUsersRequest withSecurity(SetChannelPrivacyUsersSecurity security) {
        this.security = security;
        return this;
    }
}