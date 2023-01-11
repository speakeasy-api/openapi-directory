package openapisdk.models.operations;



public class ListCallLogsMetricsResponse {
    public byte[] body;
    public ListCallLogsMetricsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListCallLogsMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListCallLogsMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListCallLogsMetrics200ApplicationJson listCallLogsMetrics200ApplicationJSONObject;
    public ListCallLogsMetricsResponse withListCallLogsMetrics200ApplicationJsonObject(ListCallLogsMetrics200ApplicationJson listCallLogsMetrics200ApplicationJSONObject) {
        this.listCallLogsMetrics200ApplicationJSONObject = listCallLogsMetrics200ApplicationJSONObject;
        return this;
    }
}