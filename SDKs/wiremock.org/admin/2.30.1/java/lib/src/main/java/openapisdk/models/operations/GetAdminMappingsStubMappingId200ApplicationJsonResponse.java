package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAdminMappingsStubMappingId200ApplicationJsonResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalProxyRequestHeaders")
    public java.util.Map<String, Object> additionalProxyRequestHeaders;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withAdditionalProxyRequestHeaders(java.util.Map<String, Object> additionalProxyRequestHeaders) {
        this.additionalProxyRequestHeaders = additionalProxyRequestHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base64Body")
    public String base64Body;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withBase64Body(String base64Body) {
        this.base64Body = base64Body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bodyFileName")
    public String bodyFileName;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withBodyFileName(String bodyFileName) {
        this.bodyFileName = bodyFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fault")
    public GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum fault;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withFault(GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum fault) {
        this.fault = fault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedDelayMilliseconds")
    public Long fixedDelayMilliseconds;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withFixedDelayMilliseconds(Long fixedDelayMilliseconds) {
        this.fixedDelayMilliseconds = fixedDelayMilliseconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromConfiguredStub")
    public Boolean fromConfiguredStub;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withFromConfiguredStub(Boolean fromConfiguredStub) {
        this.fromConfiguredStub = fromConfiguredStub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, Object> headers;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonBody")
    public java.util.Map<String, Object> jsonBody;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withJsonBody(java.util.Map<String, Object> jsonBody) {
        this.jsonBody = jsonBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxyBaseUrl")
    public String proxyBaseUrl;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withProxyBaseUrl(String proxyBaseUrl) {
        this.proxyBaseUrl = proxyBaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformerParameters")
    public java.util.Map<String, Object> transformerParameters;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withTransformerParameters(java.util.Map<String, Object> transformerParameters) {
        this.transformerParameters = transformerParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformers")
    public String[] transformers;
    public GetAdminMappingsStubMappingId200ApplicationJsonResponse withTransformers(String[] transformers) {
        this.transformers = transformers;
        return this;
    }
}