package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForCustomObjectBulkJobRequest {
    public PostUploadFileForCustomObjectBulkJobPathParams pathParams;
    public PostUploadFileForCustomObjectBulkJobRequest withPathParams(PostUploadFileForCustomObjectBulkJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostUploadFileForCustomObjectBulkJobHeaders headers;
    public PostUploadFileForCustomObjectBulkJobRequest withHeaders(PostUploadFileForCustomObjectBulkJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/csv")
    public String request;
    public PostUploadFileForCustomObjectBulkJobRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}