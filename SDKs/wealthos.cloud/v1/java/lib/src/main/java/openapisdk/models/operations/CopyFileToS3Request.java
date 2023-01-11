package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyFileToS3Request {
    public CopyFileToS3Headers headers;
    public CopyFileToS3Request withHeaders(CopyFileToS3Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CopyFileToS3Request withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CopyFileToS3Security security;
    public CopyFileToS3Request withSecurity(CopyFileToS3Security security) {
        this.security = security;
        return this;
    }
}