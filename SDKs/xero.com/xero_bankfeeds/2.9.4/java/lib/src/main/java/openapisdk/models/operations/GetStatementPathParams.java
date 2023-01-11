package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=statementID")
    public String statementID;
    public GetStatementPathParams withStatementId(String statementID) {
        this.statementID = statementID;
        return this;
    }
}