package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeleteNotificationHistoryForAccountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public DeleteDeleteNotificationHistoryForAccountQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}