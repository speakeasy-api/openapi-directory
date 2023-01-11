package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetTransactionSummaryQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=categoryId")
    public String categoryId;
    public GetTransactionSummaryQueryParams withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=categoryType")
    public String categoryType;
    public GetTransactionSummaryQueryParams withCategoryType(String categoryType) {
        this.categoryType = categoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public String fromDate;
    public GetTransactionSummaryQueryParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupBy")
    public String groupBy;
    public GetTransactionSummaryQueryParams withGroupBy(String groupBy) {
        this.groupBy = groupBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetTransactionSummaryQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeUserCategory")
    public Boolean includeUserCategory;
    public GetTransactionSummaryQueryParams withIncludeUserCategory(Boolean includeUserCategory) {
        this.includeUserCategory = includeUserCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public String interval;
    public GetTransactionSummaryQueryParams withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public String toDate;
    public GetTransactionSummaryQueryParams withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
}