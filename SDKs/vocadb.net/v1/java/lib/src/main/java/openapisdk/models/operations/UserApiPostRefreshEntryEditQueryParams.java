package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiPostRefreshEntryEditQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entryId")
    public Integer entryId;
    public UserApiPostRefreshEntryEditQueryParams withEntryId(Integer entryId) {
        this.entryId = entryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entryType")
    public UserApiPostRefreshEntryEditEntryTypeEnum entryType;
    public UserApiPostRefreshEntryEditQueryParams withEntryType(UserApiPostRefreshEntryEditEntryTypeEnum entryType) {
        this.entryType = entryType;
        return this;
    }
}