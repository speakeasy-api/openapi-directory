package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetBillingDocumentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetBillingDocumentsQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=documentDate")
    public LocalDate documentDate;
    public GetBillingDocumentsQueryParams withDocumentDate(LocalDate documentDate) {
        this.documentDate = documentDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetBillingDocumentsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetBillingDocumentsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.GlobalRequestPageSizeEnum1 status;
    public GetBillingDocumentsQueryParams withStatus(openapisdk.models.shared.GlobalRequestPageSizeEnum1 status) {
        this.status = status;
        return this;
    }
}