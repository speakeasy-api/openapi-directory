package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProcessSettingsBatchRequestRequest {
    public PostProcessSettingsBatchRequestHeaders headers;
    public PostProcessSettingsBatchRequestRequest withHeaders(PostProcessSettingsBatchRequestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SettingsBatchRequest request;
    public PostProcessSettingsBatchRequestRequest withRequest(openapisdk.models.shared.SettingsBatchRequest request) {
        this.request = request;
        return this;
    }
}