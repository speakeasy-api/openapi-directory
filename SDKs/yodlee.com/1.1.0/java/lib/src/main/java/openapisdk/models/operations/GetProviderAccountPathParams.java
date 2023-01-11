package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProviderAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=providerAccountId")
    public Long providerAccountId;
    public GetProviderAccountPathParams withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
}