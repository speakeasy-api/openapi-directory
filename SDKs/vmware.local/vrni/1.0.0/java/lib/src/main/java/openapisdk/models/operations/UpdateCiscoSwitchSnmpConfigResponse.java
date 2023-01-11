package openapisdk.models.operations;



public class UpdateCiscoSwitchSnmpConfigResponse {
    public openapisdk.models.shared.ApiError apiError;
    public UpdateCiscoSwitchSnmpConfigResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public UpdateCiscoSwitchSnmpConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SnmpConfig snmpConfig;
    public UpdateCiscoSwitchSnmpConfigResponse withSnmpConfig(openapisdk.models.shared.SnmpConfig snmpConfig) {
        this.snmpConfig = snmpConfig;
        return this;
    }
    public Long statusCode;
    public UpdateCiscoSwitchSnmpConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}