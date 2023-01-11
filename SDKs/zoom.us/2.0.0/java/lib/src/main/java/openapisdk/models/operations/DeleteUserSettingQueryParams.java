package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserSettingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=shared_id")
    public String sharedId;
    public DeleteUserSettingQueryParams withSharedId(String sharedId) {
        this.sharedId = sharedId;
        return this;
    }
}