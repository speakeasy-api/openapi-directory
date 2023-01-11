package openapisdk.models.shared;


public enum GetPublicEmailTemplateResponseCcEmailTypeEnum {
    BILL_TO_CONTACT("BillToContact"),
    SOLD_TO_CONTACT("SoldToContact"),
    SPECIFIC_EMAILS("SpecificEmails"),
    TENANT_ADMIN("TenantAdmin"),
    BILL_TO_AND_SOLD_TO_CONTACTS("BillToAndSoldToContacts"),
    RUN_OWNER("RunOwner"),
    ALL_CONTACTS("AllContacts"),
    INVOICE_OWNER_BILL_TO_CONTACT("InvoiceOwnerBillToContact"),
    INVOICE_OWNER_SOLD_TO_CONTACT("InvoiceOwnerSoldToContact"),
    INVOICE_OWNER_BILL_TO_AND_SOLD_TO_CONTACTS("InvoiceOwnerBillToAndSoldToContacts"),
    INVOICE_OWNER_ALL_CONTACTS("InvoiceOwnerAllContacts");

    public final String value;

    private GetPublicEmailTemplateResponseCcEmailTypeEnum(String value) {
        this.value = value;
    }
}
