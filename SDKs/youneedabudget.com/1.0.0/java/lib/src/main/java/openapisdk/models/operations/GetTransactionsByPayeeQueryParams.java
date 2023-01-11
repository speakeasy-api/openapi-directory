package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsByPayeeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_knowledge_of_server")
    public Long lastKnowledgeOfServer;
    public GetTransactionsByPayeeQueryParams withLastKnowledgeOfServer(Long lastKnowledgeOfServer) {
        this.lastKnowledgeOfServer = lastKnowledgeOfServer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since_date")
    public LocalDate sinceDate;
    public GetTransactionsByPayeeQueryParams withSinceDate(LocalDate sinceDate) {
        this.sinceDate = sinceDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetTransactionsByPayeeTypeEnum type;
    public GetTransactionsByPayeeQueryParams withType(GetTransactionsByPayeeTypeEnum type) {
        this.type = type;
        return this;
    }
}