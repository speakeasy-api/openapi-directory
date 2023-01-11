package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatementsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetStatementsQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=container")
    public String container;
    public GetStatementsQueryParams withContainer(String container) {
        this.container = container;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public String fromDate;
    public GetStatementsQueryParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isLatest")
    public String isLatest;
    public GetStatementsQueryParams withIsLatest(String isLatest) {
        this.isLatest = isLatest;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public GetStatementsQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}