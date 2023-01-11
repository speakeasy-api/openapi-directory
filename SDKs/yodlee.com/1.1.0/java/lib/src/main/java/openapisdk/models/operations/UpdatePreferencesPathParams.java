package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePreferencesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=providerAccountId")
    public Long providerAccountId;
    public UpdatePreferencesPathParams withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
}