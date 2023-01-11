package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllinvestorAccountsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=account_id")
    public String accountId;
    public GetAllinvestorAccountsQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=financial_product_id")
    public String financialProductId;
    public GetAllinvestorAccountsQueryParams withFinancialProductId(String financialProductId) {
        this.financialProductId = financialProductId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=investor_id")
    public String investorId;
    public GetAllinvestorAccountsQueryParams withInvestorId(String investorId) {
        this.investorId = investorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public String pageNumber;
    public GetAllinvestorAccountsQueryParams withPageNumber(String pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public String pageSize;
    public GetAllinvestorAccountsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public GetAllinvestorAccountsQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}