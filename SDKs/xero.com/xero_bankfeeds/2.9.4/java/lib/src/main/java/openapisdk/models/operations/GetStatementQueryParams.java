package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatementQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=statementId")
    public String statementId;
    public GetStatementQueryParams withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
}