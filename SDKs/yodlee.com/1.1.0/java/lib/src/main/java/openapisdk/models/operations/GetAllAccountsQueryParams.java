package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllAccountsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetAllAccountsQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=container")
    public String container;
    public GetAllAccountsQueryParams withContainer(String container) {
        this.container = container;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetAllAccountsQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=providerAccountId")
    public String providerAccountId;
    public GetAllAccountsQueryParams withProviderAccountId(String providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=requestId")
    public String requestId;
    public GetAllAccountsQueryParams withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public GetAllAccountsQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}