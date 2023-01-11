package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInternalNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public DeleteInternalNumberPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=numberId")
    public String numberId;
    public DeleteInternalNumberPathParams withNumberId(String numberId) {
        this.numberId = numberId;
        return this;
    }
}