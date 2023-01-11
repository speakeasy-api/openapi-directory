package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostXmltojsonRequest {
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public String request;
    public PostXmltojsonRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}