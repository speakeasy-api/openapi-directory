package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBankAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bank_account_id")
    public String bankAccountId;
    public UpdateBankAccountPathParams withBankAccountId(String bankAccountId) {
        this.bankAccountId = bankAccountId;
        return this;
    }
}