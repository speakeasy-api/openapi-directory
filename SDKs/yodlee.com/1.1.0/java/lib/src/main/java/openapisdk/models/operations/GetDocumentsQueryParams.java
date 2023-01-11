package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Keyword")
    public String keyword;
    public GetDocumentsQueryParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetDocumentsQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=docType")
    public String docType;
    public GetDocumentsQueryParams withDocType(String docType) {
        this.docType = docType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public String fromDate;
    public GetDocumentsQueryParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public String toDate;
    public GetDocumentsQueryParams withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
}