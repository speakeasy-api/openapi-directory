package openapisdk.models.operations;



public class UpdateBrocadeSwitchSnmpConfigResponse {
    public openapisdk.models.shared.ApiError apiError;
    public UpdateBrocadeSwitchSnmpConfigResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public UpdateBrocadeSwitchSnmpConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SnmpConfig snmpConfig;
    public UpdateBrocadeSwitchSnmpConfigResponse withSnmpConfig(openapisdk.models.shared.SnmpConfig snmpConfig) {
        this.snmpConfig = snmpConfig;
        return this;
    }
    public Long statusCode;
    public UpdateBrocadeSwitchSnmpConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}