package openapisdk.models.operations;



public class GetWorkflowExportResponse {
    public String contentType;
    public GetWorkflowExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetWorkflowExport200ApplicationJson getWorkflowExport200ApplicationJSONObject;
    public GetWorkflowExportResponse withGetWorkflowExport200ApplicationJsonObject(GetWorkflowExport200ApplicationJson getWorkflowExport200ApplicationJSONObject) {
        this.getWorkflowExport200ApplicationJSONObject = getWorkflowExport200ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetWorkflowExportResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetWorkflowExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}