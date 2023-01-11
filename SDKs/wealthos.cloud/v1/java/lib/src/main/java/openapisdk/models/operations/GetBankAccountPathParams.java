package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBankAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bank_account_id")
    public String bankAccountId;
    public GetBankAccountPathParams withBankAccountId(String bankAccountId) {
        this.bankAccountId = bankAccountId;
        return this;
    }
}