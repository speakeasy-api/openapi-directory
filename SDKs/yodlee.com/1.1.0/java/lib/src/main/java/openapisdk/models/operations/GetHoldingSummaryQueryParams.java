package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHoldingSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountIds")
    public String accountIds;
    public GetHoldingSummaryQueryParams withAccountIds(String accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classificationType")
    public String classificationType;
    public GetHoldingSummaryQueryParams withClassificationType(String classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetHoldingSummaryQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}