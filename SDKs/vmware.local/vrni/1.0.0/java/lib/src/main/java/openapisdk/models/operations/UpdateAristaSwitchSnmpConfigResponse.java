package openapisdk.models.operations;



public class UpdateAristaSwitchSnmpConfigResponse {
    public openapisdk.models.shared.ApiError apiError;
    public UpdateAristaSwitchSnmpConfigResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public UpdateAristaSwitchSnmpConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SnmpConfig snmpConfig;
    public UpdateAristaSwitchSnmpConfigResponse withSnmpConfig(openapisdk.models.shared.SnmpConfig snmpConfig) {
        this.snmpConfig = snmpConfig;
        return this;
    }
    public Long statusCode;
    public UpdateAristaSwitchSnmpConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}