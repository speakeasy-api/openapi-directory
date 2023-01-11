package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_knowledge_of_server")
    public Long lastKnowledgeOfServer;
    public GetTransactionsQueryParams withLastKnowledgeOfServer(Long lastKnowledgeOfServer) {
        this.lastKnowledgeOfServer = lastKnowledgeOfServer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since_date")
    public LocalDate sinceDate;
    public GetTransactionsQueryParams withSinceDate(LocalDate sinceDate) {
        this.sinceDate = sinceDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetTransactionsTypeEnum type;
    public GetTransactionsQueryParams withType(GetTransactionsTypeEnum type) {
        this.type = type;
        return this;
    }
}