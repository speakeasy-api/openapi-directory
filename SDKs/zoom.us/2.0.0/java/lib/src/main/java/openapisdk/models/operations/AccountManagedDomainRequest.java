package openapisdk.models.operations;



public class AccountManagedDomainRequest {
    public AccountManagedDomainPathParams pathParams;
    public AccountManagedDomainRequest withPathParams(AccountManagedDomainPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccountManagedDomainSecurity security;
    public AccountManagedDomainRequest withSecurity(AccountManagedDomainSecurity security) {
        this.security = security;
        return this;
    }
}