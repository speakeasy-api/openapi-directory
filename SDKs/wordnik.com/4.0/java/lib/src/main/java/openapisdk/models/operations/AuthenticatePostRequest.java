package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthenticatePostRequest {
    public AuthenticatePostPathParams pathParams;
    public AuthenticatePostRequest withPathParams(AuthenticatePostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public AuthenticatePostRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}