package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsByAccountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_knowledge_of_server")
    public Long lastKnowledgeOfServer;
    public GetTransactionsByAccountQueryParams withLastKnowledgeOfServer(Long lastKnowledgeOfServer) {
        this.lastKnowledgeOfServer = lastKnowledgeOfServer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since_date")
    public LocalDate sinceDate;
    public GetTransactionsByAccountQueryParams withSinceDate(LocalDate sinceDate) {
        this.sinceDate = sinceDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetTransactionsByAccountTypeEnum type;
    public GetTransactionsByAccountQueryParams withType(GetTransactionsByAccountTypeEnum type) {
        this.type = type;
        return this;
    }
}