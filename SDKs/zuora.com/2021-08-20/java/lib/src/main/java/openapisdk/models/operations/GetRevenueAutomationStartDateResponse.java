package openapisdk.models.operations;



public class GetRevenueAutomationStartDateResponse {
    public String contentType;
    public GetRevenueAutomationStartDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRevenueStartDateSettingType getRevenueStartDateSettingType;
    public GetRevenueAutomationStartDateResponse withGetRevenueStartDateSettingType(openapisdk.models.shared.GetRevenueStartDateSettingType getRevenueStartDateSettingType) {
        this.getRevenueStartDateSettingType = getRevenueStartDateSettingType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRevenueAutomationStartDateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRevenueAutomationStartDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}