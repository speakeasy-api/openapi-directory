package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProviderAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=providerAccountId")
    public Long providerAccountId;
    public DeleteProviderAccountPathParams withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
}