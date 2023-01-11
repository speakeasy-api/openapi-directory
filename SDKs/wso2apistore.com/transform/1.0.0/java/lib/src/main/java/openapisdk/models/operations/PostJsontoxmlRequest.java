package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostJsontoxmlRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public PostJsontoxmlRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}