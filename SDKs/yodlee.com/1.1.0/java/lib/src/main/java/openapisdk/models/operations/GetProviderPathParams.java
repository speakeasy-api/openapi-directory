package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProviderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=providerId")
    public Long providerId;
    public GetProviderPathParams withProviderId(Long providerId) {
        this.providerId = providerId;
        return this;
    }
}