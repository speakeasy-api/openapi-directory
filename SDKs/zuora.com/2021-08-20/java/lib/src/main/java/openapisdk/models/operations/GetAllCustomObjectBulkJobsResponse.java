package openapisdk.models.operations;



public class GetAllCustomObjectBulkJobsResponse {
    public String contentType;
    public GetAllCustomObjectBulkJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomObjectBulkJobResponseCollection customObjectBulkJobResponseCollection;
    public GetAllCustomObjectBulkJobsResponse withCustomObjectBulkJobResponseCollection(openapisdk.models.shared.CustomObjectBulkJobResponseCollection customObjectBulkJobResponseCollection) {
        this.customObjectBulkJobResponseCollection = customObjectBulkJobResponseCollection;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAllCustomObjectBulkJobsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAllCustomObjectBulkJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}