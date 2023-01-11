package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NamesRequest request;
    public GetNamesRequest withRequest(openapisdk.models.shared.NamesRequest request) {
        this.request = request;
        return this;
    }
    public GetNamesSecurity security;
    public GetNamesRequest withSecurity(GetNamesSecurity security) {
        this.security = security;
        return this;
    }
}