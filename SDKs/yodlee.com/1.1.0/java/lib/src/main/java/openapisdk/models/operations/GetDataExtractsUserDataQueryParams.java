package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataExtractsUserDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public String fromDate;
    public GetDataExtractsUserDataQueryParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=loginName")
    public String loginName;
    public GetDataExtractsUserDataQueryParams withLoginName(String loginName) {
        this.loginName = loginName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public String toDate;
    public GetDataExtractsUserDataQueryParams withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
}