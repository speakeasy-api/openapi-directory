package openapisdk.models.operations;



public class AccountCallLogsRequest {
    public AccountCallLogsQueryParams queryParams;
    public AccountCallLogsRequest withQueryParams(AccountCallLogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AccountCallLogsSecurity security;
    public AccountCallLogsRequest withSecurity(AccountCallLogsSecurity security) {
        this.security = security;
        return this;
    }
}