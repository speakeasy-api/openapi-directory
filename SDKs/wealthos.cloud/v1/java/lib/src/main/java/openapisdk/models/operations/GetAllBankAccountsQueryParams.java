package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllBankAccountsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=investor_id")
    public String investorId;
    public GetAllBankAccountsQueryParams withInvestorId(String investorId) {
        this.investorId = investorId;
        return this;
    }
}