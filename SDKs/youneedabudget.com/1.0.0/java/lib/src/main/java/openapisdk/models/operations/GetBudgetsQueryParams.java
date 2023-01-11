package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBudgetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_accounts")
    public Boolean includeAccounts;
    public GetBudgetsQueryParams withIncludeAccounts(Boolean includeAccounts) {
        this.includeAccounts = includeAccounts;
        return this;
    }
}