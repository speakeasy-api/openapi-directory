package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFileRequest {
    public UploadFileQueryParams queryParams;
    public UploadFileRequest withQueryParams(UploadFileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UploadFileHeaders headers;
    public UploadFileRequest withHeaders(UploadFileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UploadFileRequestBody request;
    public UploadFileRequest withRequest(UploadFileRequestBody request) {
        this.request = request;
        return this;
    }
    public UploadFileSecurity security;
    public UploadFileRequest withSecurity(UploadFileSecurity security) {
        this.security = security;
        return this;
    }
}