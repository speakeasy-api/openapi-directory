# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BrowseCSVRequest;
import org.openapis.openapi.models.operations.BrowseCSVResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            BrowseCSVRequest req = new BrowseCSVRequest() {{
                additionalOrder = "corrupti";
                secondarySeparator = "provident";
                separator = "distinctio";
                viewId = 844266L;
            }};            

            BrowseCSVResponse res = sdk.browser.browseCSV(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [browser](docs/browser/README.md)

* [browseCSV](docs/browser/README.md#browsecsv) - Searches for data (ie. customer, task, etc) and returns it in a CSV form.
* [browseJSON](docs/browser/README.md#browsejson) - Searches for data (ie. customer, task, etc) and returns it in a tabular form.
* [create](docs/browser/README.md#create) - Creates view for given class.
* [delete](docs/browser/README.md#delete) - Removes a view.
* [deleteColumn](docs/browser/README.md#deletecolumn) - Deletes a single column from view.
* [get](docs/browser/README.md#get) - Returns all view's information.
* [getColumnSettings](docs/browser/README.md#getcolumnsettings) - Returns column's specific settings.
* [getColumns](docs/browser/README.md#getcolumns) - Returns columns defined in view.
* [getCurrentViewDetails](docs/browser/README.md#getcurrentviewdetails) - Returns current view's detailed information, suitable for browser.
* [getFilter](docs/browser/README.md#getfilter) - Returns view's filter.
* [getLocalSettings](docs/browser/README.md#getlocalsettings) - Returns view's local settings (for current user).
* [getOrder](docs/browser/README.md#getorder) - Returns view's order settings.
* [getPermissions](docs/browser/README.md#getpermissions) - Returns view's permissions.
* [getSettings](docs/browser/README.md#getsettings) - Returns view's settings.
* [getViewDetails](docs/browser/README.md#getviewdetails) - Returns view's detailed information, suitable for browser.
* [getViewsBrief](docs/browser/README.md#getviewsbrief) - Returns views' brief.
* [selectViewAndGetItsDetails](docs/browser/README.md#selectviewandgetitsdetails) - Selects given view as current and returns its detailed information, suitable for browser.
* [update](docs/browser/README.md#update) - Updates all view's information.
* [updateColumnSettings](docs/browser/README.md#updatecolumnsettings) - Updates column's specific settings.
* [updateColumns](docs/browser/README.md#updatecolumns) - Updates columns in view.
* [updateFilter](docs/browser/README.md#updatefilter) - Updates view's filter.
* [updateFilterProperty](docs/browser/README.md#updatefilterproperty) - Updates view's filter property.
* [updateLocalSettings](docs/browser/README.md#updatelocalsettings) - Updates view's local settings (for current user).
* [updateOrder](docs/browser/README.md#updateorder) - Updates view's order settings.
* [updatePermissions](docs/browser/README.md#updatepermissions) - Updates view's permissions.
* [updateSettings](docs/browser/README.md#updatesettings) - Updates view's settings.

### [clientInvoices](docs/clientinvoices/README.md)

* [createPayment](docs/clientinvoices/README.md#createpayment) - Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.
* [create1](docs/clientinvoices/README.md#create1) - Creates a new invoice.
* [delete1](docs/clientinvoices/README.md#delete1) - Removes a client invoice.
* [delete2](docs/clientinvoices/README.md#delete2) - Removes a customer payment.
* [downloadDocuments](docs/clientinvoices/README.md#downloaddocuments) - Generates client invoices' documents.
* [duplicate](docs/clientinvoices/README.md#duplicate) - Duplicate client invoice.
* [duplicateAsProForma](docs/clientinvoices/README.md#duplicateasproforma) - Duplicate client invoice as pro forma.
* [getAll](docs/clientinvoices/README.md#getall) - Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* [getAllIds](docs/clientinvoices/README.md#getallids) - Returns client invoices' internal identifiers.
* [getById](docs/clientinvoices/README.md#getbyid) - Returns client invoice details.
* [getDates](docs/clientinvoices/README.md#getdates) - Returns dates of a given client invoice.
* [getDocument](docs/clientinvoices/README.md#getdocument) - Generates client invoice document (PDF).
* [getPaymentTerms](docs/clientinvoices/README.md#getpaymentterms) - Returns payment terms of a given client invoice.
* [getPayments](docs/clientinvoices/README.md#getpayments) - Returns all payments for the client invoice.
* [sendReminder](docs/clientinvoices/README.md#sendreminder) - Sends reminder.
* [sendReminders](docs/clientinvoices/README.md#sendreminders) - Sends reminders. Returns number of sent e-mails.

### [clients](docs/clients/README.md)

* [create2](docs/clients/README.md#create2) - Creates a new person.
* [create3](docs/clients/README.md#create3) - Creates a new client.
* [delete3](docs/clients/README.md#delete3) - Removes a person.
* [delete4](docs/clients/README.md#delete4) - Removes a customer price list.
* [delete5](docs/clients/README.md#delete5) - Removes a client.
* [generateSingleUseSignInToken](docs/clients/README.md#generatesingleusesignintoken) - Generates a single use sign-in token.
* [getAddress](docs/clients/README.md#getaddress) - Returns address of a given client.
* [getAllIds1](docs/clients/README.md#getallids1) - Returns persons' internal identifiers.
* [getAllIds2](docs/clients/README.md#getallids2) - Returns clients' internal identifiers.
* [getAllNamesWithIds](docs/clients/README.md#getallnameswithids) - Returns list of simple clients representations
* [getById1](docs/clients/README.md#getbyid1) - Returns person details.
* [getById2](docs/clients/README.md#getbyid2) - Returns client details.
* [getCategories](docs/clients/README.md#getcategories) - Returns categories of a given client.
* [getContact](docs/clients/README.md#getcontact) - Returns contact of a given person.
* [getContact1](docs/clients/README.md#getcontact1) - Returns contact of a given client.
* [getCorrespondenceAddress](docs/clients/README.md#getcorrespondenceaddress) - Returns correspondence address of a given client.
* [getCustomField](docs/clients/README.md#getcustomfield) - Returns custom field of a given client.
* [getCustomFields](docs/clients/README.md#getcustomfields) - Returns custom fields of a given person.
* [getCustomFields1](docs/clients/README.md#getcustomfields1) - Returns custom fields of a given client.
* [getIndustries](docs/clients/README.md#getindustries) - Returns industries of a given client.
* [updateAddress](docs/clients/README.md#updateaddress) - Updates address of a given client.
* [updateCategories](docs/clients/README.md#updatecategories) - Updates categories of a given client.
* [updateContact](docs/clients/README.md#updatecontact) - Updates contact of a given person.
* [updateContact1](docs/clients/README.md#updatecontact1) - Updates contact of a given client.
* [updateCorrespondenceAddress](docs/clients/README.md#updatecorrespondenceaddress) - Updates correspondence address of a given client.
* [updateCustomField](docs/clients/README.md#updatecustomfield) - Updates given custom field of a given client.
* [updateCustomFields](docs/clients/README.md#updatecustomfields) - Updates custom fields of a given person.
* [updateCustomFields1](docs/clients/README.md#updatecustomfields1) - Updates custom fields of a given client.
* [updateIndustries](docs/clients/README.md#updateindustries) - Updates industries of a given client.
* [update1](docs/clients/README.md#update1) - Updates an existing person.
* [update2](docs/clients/README.md#update2) - Updates an existing client.

### [currencyExchangeRates](docs/currencyexchangerates/README.md)

* [createExchangeRate](docs/currencyexchangerates/README.md#createexchangerate) - Adding currency exchange rates.
* [getByIsoCode](docs/currencyexchangerates/README.md#getbyisocode) - Returns currency exchange rates.

### [dictionaries](docs/dictionaries/README.md)

* [getActive](docs/dictionaries/README.md#getactive) - Returns active dictionary entities for all types.
* [getActiveByType](docs/dictionaries/README.md#getactivebytype) - Returns active values from a given dictionary.
* [getAllActive](docs/dictionaries/README.md#getallactive) - Returns active services list
* [getAllByType](docs/dictionaries/README.md#getallbytype) - Returns all values (both active and not active) from a given dictionary.
* [getAll1](docs/dictionaries/README.md#getall1) - Returns dictionary entities for all types. Both active and not active ones.
* [getAll3](docs/dictionaries/README.md#getall3) - Returns services list
* [getByTypeAndId](docs/dictionaries/README.md#getbytypeandid) - Returns specific value from a given dictionary.

### [files](docs/files/README.md)

* [uploadFile](docs/files/README.md#uploadfile) - Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.

### [jobsClassic](docs/jobsclassic/README.md)

* [assignFileToJobOutput](docs/jobsclassic/README.md#assignfiletojoboutput)
* [assignVendor](docs/jobsclassic/README.md#assignvendor) - Assigns vendor to a job in a project.
* [changeStatus](docs/jobsclassic/README.md#changestatus) - Changes job status if possible (400 Bad Request is returned otherwise).
* [getJobDetails](docs/jobsclassic/README.md#getjobdetails) - Returns job details by jobId.
* [getJobFiles](docs/jobsclassic/README.md#getjobfiles) - Returns list of input and output files of a job.
* [getJobFiles1](docs/jobsclassic/README.md#getjobfiles1) - Returns file metadata.
* [updateDates](docs/jobsclassic/README.md#updatedates) - Updates dates of a given job.
* [updateInstructions](docs/jobsclassic/README.md#updateinstructions) - Updates instructions for a job.

### [jobsSmartV2](docs/jobssmartv2/README.md)

* [addExternalFileLink](docs/jobssmartv2/README.md#addexternalfilelink)
* [addFileLinks](docs/jobssmartv2/README.md#addfilelinks) - Adds file link to the project as a link delivered in the job.
* [addFiles](docs/jobssmartv2/README.md#addfiles) - Adds files to the project as delivered in the job.
* [assignVendor1](docs/jobssmartv2/README.md#assignvendor1) - Assigns vendor to a job in a project.
* [changeDates](docs/jobssmartv2/README.md#changedates) - Updates dates of a given job.
* [changeStatus1](docs/jobssmartv2/README.md#changestatus1) - Changes job status if possible (400 Bad Request is returned otherwise).
* [getByExternalId](docs/jobssmartv2/README.md#getbyexternalid)
* [getDeliveredFiles](docs/jobssmartv2/README.md#getdeliveredfiles) - Returns list of files delivered in the job.
* [getFileById1](docs/jobssmartv2/README.md#getfilebyid1) - Returns details for a job.
* [getSharedReferenceFiles](docs/jobssmartv2/README.md#getsharedreferencefiles) - Returns list of files shared with the job as Reference Files.
* [getSharedWorkFiles](docs/jobssmartv2/README.md#getsharedworkfiles) - Returns list of files shared with the job as Work Files.
* [shareAsReferenceFiles](docs/jobssmartv2/README.md#shareasreferencefiles) - Shares selected files as Reference Files with a job in a project.
* [shareAsWorkFiles](docs/jobssmartv2/README.md#shareasworkfiles) - Shares selected files as Work Files with a job in a project.
* [stopSharing](docs/jobssmartv2/README.md#stopsharing) - Stops sharing selected files with a job in a project.
* [updateInstructions4](docs/jobssmartv2/README.md#updateinstructions4) - Updates instructions for a job.
* [uploadFile1](docs/jobssmartv2/README.md#uploadfile1) - Uploads file to the project as a file delivered in the job.

### [license](docs/license/README.md)

* [getLicense](docs/license/README.md#getlicense) - Returns license content.
* [refresh](docs/license/README.md#refresh) - Refreshes license content.

### [macros](docs/macros/README.md)

* [run](docs/macros/README.md#run) - Executes a macro.

### [projectsClassic](docs/projectsclassic/README.md)

* [createLanguageCombination](docs/projectsclassic/README.md#createlanguagecombination) - Creates a new language combination for a given project without creating a task.
* [createPayable](docs/projectsclassic/README.md#createpayable) - Adds a payable to a project.
* [createReceivable](docs/projectsclassic/README.md#createreceivable) - Adds a receivable to a project.
* [createTask](docs/projectsclassic/README.md#createtask) - Creates a new task for a given project.
* [create5](docs/projectsclassic/README.md#create5) - Creates a new Classic Project.
* [deletePayable](docs/projectsclassic/README.md#deletepayable) - Deletes a payable.
* [deleteReceivable](docs/projectsclassic/README.md#deletereceivable) - Deletes a receivable.
* [delete12](docs/projectsclassic/README.md#delete12) - Removes a project.
* [getAllIds6](docs/projectsclassic/README.md#getallids6) - Returns projects' internal identifiers.
* [getById7](docs/projectsclassic/README.md#getbyid7) - Returns project details.
* [getContacts](docs/projectsclassic/README.md#getcontacts) - Returns contacts of a given project.
* [getCustomFields5](docs/projectsclassic/README.md#getcustomfields5) - Returns custom fields of a given project.
* [getDates1](docs/projectsclassic/README.md#getdates1) - Returns dates of a given project.
* [getFileById](docs/projectsclassic/README.md#getfilebyid) - Downloads a file.
* [getFinance](docs/projectsclassic/README.md#getfinance) - Returns finance of a given project.
* [getInstructions](docs/projectsclassic/README.md#getinstructions) - Returns instructions of a given project.
* [updateContacts](docs/projectsclassic/README.md#updatecontacts) - Updates contacts of a given project.
* [updateCustomFields3](docs/projectsclassic/README.md#updatecustomfields3) - Updates custom fields of a given project.
* [updateDates1](docs/projectsclassic/README.md#updatedates1) - Updates dates of a given project.
* [updateInstructions1](docs/projectsclassic/README.md#updateinstructions1) - Updates instructions of a given project.
* [updatePayable](docs/projectsclassic/README.md#updatepayable) - Updates a payable.
* [updateReceivable](docs/projectsclassic/README.md#updatereceivable) - Updates a receivable.

### [projectsSmartV2](docs/projectssmartv2/README.md)

* [addExternalFileLinks](docs/projectssmartv2/README.md#addexternalfilelinks)
* [addFileLinks1](docs/projectssmartv2/README.md#addfilelinks1) - Adds file links to the project as added by PM.
* [addFiles1](docs/projectssmartv2/README.md#addfiles1) - Adds files to the project as added by PM.
* [addJobToProcess](docs/projectssmartv2/README.md#addjobtoprocess) - Returns process id.
* [archive](docs/projectssmartv2/README.md#archive) - Prepares a ZIP archive that contains the specified files.
* [changeStatus2](docs/projectssmartv2/README.md#changestatus2) - Changes project status if possible (400 Bad Request is returned otherwise).
* [createPayable2](docs/projectssmartv2/README.md#createpayable2) - Adds a payable to a project.
* [createReceivable2](docs/projectssmartv2/README.md#createreceivable2) - Adds a receivable to a project.
* [create6](docs/projectssmartv2/README.md#create6) - Creates a new Smart Project.
* [deletePayable2](docs/projectssmartv2/README.md#deletepayable2) - Deletes a payable.
* [deleteReceivable2](docs/projectssmartv2/README.md#deletereceivable2) - Deletes a receivable.
* [getByExternalId1](docs/projectssmartv2/README.md#getbyexternalid1) - Returns project details.
* [getById9](docs/projectssmartv2/README.md#getbyid9) - Returns project details.
* [getCATToolProjectInfo](docs/projectssmartv2/README.md#getcattoolprojectinfo) - Returns if cat tool project is created or queued.
* [getContacts2](docs/projectssmartv2/README.md#getcontacts2) - Returns Client Contacts information for a project.
* [getCustomFields8](docs/projectssmartv2/README.md#getcustomfields8) - Returns a list of custom field keys and values for a project.
* [getDeliverableFiles](docs/projectssmartv2/README.md#getdeliverablefiles) - Returns list of files in a project, that are ready to be delivered to client.
* [getFileById2](docs/projectssmartv2/README.md#getfilebyid2) - Returns details of a file.
* [getFileContentById](docs/projectssmartv2/README.md#getfilecontentbyid) - Downloads a file content.
* [getFiles](docs/projectssmartv2/README.md#getfiles) - Returns list of files in a project.
* [getFinance2](docs/projectssmartv2/README.md#getfinance2) - Returns finance information for a project.
* [getJobs](docs/projectssmartv2/README.md#getjobs) - Returns list of jobs in a project.
* [getProcessId](docs/projectssmartv2/README.md#getprocessid) - Returns process id.
* [updateClientDeadline](docs/projectssmartv2/README.md#updateclientdeadline) - Updates Client Deadline for a project.
* [updateClientNotes](docs/projectssmartv2/README.md#updateclientnotes) - Updates Client Notes for a project.
* [updateClientReferenceNumber](docs/projectssmartv2/README.md#updateclientreferencenumber) - Updates Client Reference Number for a project.
* [updateContacts2](docs/projectssmartv2/README.md#updatecontacts2) - Updates Client Contacts for a project.
* [updateCustomField2](docs/projectssmartv2/README.md#updatecustomfield2) - Updates a custom field with a specified key in a project
* [updateInternalNotes](docs/projectssmartv2/README.md#updateinternalnotes) - Updates Internal Notes for a project.
* [updateOrderedOn](docs/projectssmartv2/README.md#updateorderedon) - Updates Order Date for a project.
* [updatePayable2](docs/projectssmartv2/README.md#updatepayable2) - Updates a payable.
* [updateReceivable2](docs/projectssmartv2/README.md#updatereceivable2) - Updates a receivable.
* [updateSourceLanguage](docs/projectssmartv2/README.md#updatesourcelanguage) - Updates source language for a project.
* [updateSpecialization](docs/projectssmartv2/README.md#updatespecialization) - Updates specialization for a project.
* [updateTargetLanguages](docs/projectssmartv2/README.md#updatetargetlanguages) - Updates target languages for a project.
* [updateVendorInstructions](docs/projectssmartv2/README.md#updatevendorinstructions) - Updates instructions for all vendors performing the jobs in a project.
* [updateVolume](docs/projectssmartv2/README.md#updatevolume) - Updates volume for a project.
* [uploadFile2](docs/projectssmartv2/README.md#uploadfile2) - Uploads file to the project as a file uploaded by PM.

### [quotesClassic](docs/quotesclassic/README.md)

* [createLanguageCombination1](docs/quotesclassic/README.md#createlanguagecombination1) - Creates a new language combination for a given quote without creating a task.
* [createPayable1](docs/quotesclassic/README.md#createpayable1) - Adds a payable.
* [createReceivable1](docs/quotesclassic/README.md#createreceivable1) - Adds a receivable.
* [createTask1](docs/quotesclassic/README.md#createtask1) - Creates a new task for a given quote.
* [deletePayable1](docs/quotesclassic/README.md#deletepayable1) - Deletes a payable.
* [deleteReceivable1](docs/quotesclassic/README.md#deletereceivable1) - Deletes a receivable.
* [delete13](docs/quotesclassic/README.md#delete13) - Removes a quote.
* [getAllIds7](docs/quotesclassic/README.md#getallids7) - Returns quotes' internal identifiers.
* [getById8](docs/quotesclassic/README.md#getbyid8) - Returns quote details.
* [getCustomFields6](docs/quotesclassic/README.md#getcustomfields6) - Returns custom fields of a given quote.
* [getDates2](docs/quotesclassic/README.md#getdates2) - Returns dates of a given quote.
* [getFinance1](docs/quotesclassic/README.md#getfinance1) - Returns finance of a given quote.
* [getInstructions1](docs/quotesclassic/README.md#getinstructions1) - Returns instructions of a given quote.
* [send1](docs/quotesclassic/README.md#send1) - Sends a quote for customer confirmation.
* [start](docs/quotesclassic/README.md#start) - Starts a quote.
* [updateCustomFields4](docs/quotesclassic/README.md#updatecustomfields4) - Updates custom fields of a given quote.
* [updateInstructions2](docs/quotesclassic/README.md#updateinstructions2) - Updates instructions of a given quote.
* [updatePayable1](docs/quotesclassic/README.md#updatepayable1) - Updates a payable.
* [updateReceivable1](docs/quotesclassic/README.md#updatereceivable1) - Updates a receivable.

### [quotesSmartV2](docs/quotessmartv2/README.md)

* [addFiles2](docs/quotessmartv2/README.md#addfiles2) - Adds files to the quote as added by PM.
* [archive1](docs/quotessmartv2/README.md#archive1) - Prepares a ZIP archive that contains the specified files.
* [changeStatus3](docs/quotessmartv2/README.md#changestatus3) - Changes quote status if possible (400 Bad Request is returned otherwise).
* [createPayable3](docs/quotessmartv2/README.md#createpayable3) - Adds a payable to a quote.
* [createReceivable3](docs/quotessmartv2/README.md#createreceivable3) - Adds a receivable to a quote.
* [create7](docs/quotessmartv2/README.md#create7) - Creates a new Smart Quote.
* [deletePayable3](docs/quotessmartv2/README.md#deletepayable3) - Deletes a payable.
* [deleteReceivable3](docs/quotessmartv2/README.md#deletereceivable3) - Deletes a receivable.
* [getById10](docs/quotessmartv2/README.md#getbyid10) - Returns quote details.
* [getContacts3](docs/quotessmartv2/README.md#getcontacts3) - Returns Client Contacts information for a quote.
* [getCustomFields9](docs/quotessmartv2/README.md#getcustomfields9) - Returns a list of custom field keys and values for a project.
* [getFileById3](docs/quotessmartv2/README.md#getfilebyid3) - Returns details of a file.
* [getFileContentById1](docs/quotessmartv2/README.md#getfilecontentbyid1) - Downloads a file content.
* [getFiles1](docs/quotessmartv2/README.md#getfiles1) - Returns list of files in a quote.
* [getFinance3](docs/quotessmartv2/README.md#getfinance3) - Returns finance information for a quote.
* [getJobs1](docs/quotessmartv2/README.md#getjobs1) - Returns list of jobs in a quote.
* [updateBusinessDays](docs/quotessmartv2/README.md#updatebusinessdays) - Updates Business Days for a quote.
* [updateClientNotes1](docs/quotessmartv2/README.md#updateclientnotes1) - Updates Client Notes for a quote.
* [updateClientReferenceNumber1](docs/quotessmartv2/README.md#updateclientreferencenumber1) - Updates Client Reference Number for a quote.
* [updateContacts3](docs/quotessmartv2/README.md#updatecontacts3) - Updates Client Contacts for a quote.
* [updateCustomField3](docs/quotessmartv2/README.md#updatecustomfield3) - Updates a custom field with a specified key in a quote.
* [updateExpectedDeliveryDate](docs/quotessmartv2/README.md#updateexpecteddeliverydate) - Updates Expected Delivery Date for a quote.
* [updateInternalNotes1](docs/quotessmartv2/README.md#updateinternalnotes1) - Updates Internal Notes for a quote.
* [updatePayable3](docs/quotessmartv2/README.md#updatepayable3) - Updates a payable.
* [updateQuoteExpiry](docs/quotessmartv2/README.md#updatequoteexpiry) - Updates Quote Expiry Date for a quote.
* [updateReceivable3](docs/quotessmartv2/README.md#updatereceivable3) - Updates a receivable.
* [updateSourceLanguage1](docs/quotessmartv2/README.md#updatesourcelanguage1) - Updates source language for a quote.
* [updateSpecialization1](docs/quotessmartv2/README.md#updatespecialization1) - Updates specialization for a quote.
* [updateTargetLanguages1](docs/quotessmartv2/README.md#updatetargetlanguages1) - Updates target languages for a quote.
* [updateVendorInstructions1](docs/quotessmartv2/README.md#updatevendorinstructions1) - Updates instructions for all vendors performing the jobs in a quote.
* [updateVolume1](docs/quotessmartv2/README.md#updatevolume1) - Updates volume for a quote.
* [uploadFile3](docs/quotessmartv2/README.md#uploadfile3) - Uploads file to the quote as a file uploaded by PM.

### [reports](docs/reports/README.md)

* [delete11](docs/reports/README.md#delete11) - Removes a report.
* [duplicate1](docs/reports/README.md#duplicate1) - Duplicates a report.
* [exportToXML](docs/reports/README.md#exporttoxml) - Exports reports definition to XML.
* [generateCSV](docs/reports/README.md#generatecsv) - Generates CSV content for a report.
* [generatePrinterFriendly](docs/reports/README.md#generateprinterfriendly) - Generates printer friendly content for a report.
* [importFromXML](docs/reports/README.md#importfromxml) - Imports reports definition from XML.
* [setPreferred](docs/reports/README.md#setpreferred) - Marks report as preferred or not.

### [subscription](docs/subscription/README.md)

* [areHooksSupported](docs/subscription/README.md#arehookssupported) - This method can be used to determine if hooks are supported.
* [getAll4](docs/subscription/README.md#getall4) - Returns all subscriptions
* [subscribe](docs/subscription/README.md#subscribe) - Subscribe to event
* [unsubscribe](docs/subscription/README.md#unsubscribe) - Unsubscribe from event

### [tasksClassic](docs/tasksclassic/README.md)

* [addFile](docs/tasksclassic/README.md#addfile) - Adds files to a given task.
* [delete14](docs/tasksclassic/README.md#delete14) - Removes a task.
* [getContacts1](docs/tasksclassic/README.md#getcontacts1) - Returns contacts of a given task.
* [getCustomFields7](docs/tasksclassic/README.md#getcustomfields7) - Returns custom fields of a given task.
* [getDates3](docs/tasksclassic/README.md#getdates3) - Returns dates of a given task.
* [getInstructions2](docs/tasksclassic/README.md#getinstructions2) - Returns instructions of a given task.
* [getProgress](docs/tasksclassic/README.md#getprogress) - Returns progress of a given task.
* [getTaskFiles](docs/tasksclassic/README.md#gettaskfiles) - Returns lists of files of a given task.
* [start1](docs/tasksclassic/README.md#start1) - Starts a task.
* [updateClientTaskPONumber](docs/tasksclassic/README.md#updateclienttaskponumber) - Updates Client Task PO Number of a given task.
* [updateContacts1](docs/tasksclassic/README.md#updatecontacts1) - Updates contacts of a given task.
* [updateCustomFields5](docs/tasksclassic/README.md#updatecustomfields5) - Updates custom fields of a given task.
* [updateDates2](docs/tasksclassic/README.md#updatedates2) - Updates dates of a given task.
* [updateInstructions3](docs/tasksclassic/README.md#updateinstructions3) - Updates instructions of a given task.
* [updateName](docs/tasksclassic/README.md#updatename) - Updates name of a given task.

### [users](docs/users/README.md)

* [changePassword](docs/users/README.md#changepassword) - Sets user's password to a new value.
* [getAllNamesWithIds1](docs/users/README.md#getallnameswithids1) - Returns list of simple users representations
* [getById6](docs/users/README.md#getbyid6) - Returns user details.
* [getCustomField1](docs/users/README.md#getcustomfield1) - Returns custom field of a given user.
* [getCustomFields4](docs/users/README.md#getcustomfields4) - Returns custom fields of a given user.
* [getMe](docs/users/README.md#getme) - Returns currently signed in user details.
* [getTimeZone](docs/users/README.md#gettimezone) - Returns time zone preferred by user currently signed in.
* [updateCustomField1](docs/users/README.md#updatecustomfield1) - Updates given custom field of a given user.
* [updateCustomFields2](docs/users/README.md#updatecustomfields2) - Updates custom fields of a given user.
* [update3](docs/users/README.md#update3) - Updates an existing user.

### [vendorInvoices](docs/vendorinvoices/README.md)

* [createPayment1](docs/vendorinvoices/README.md#createpayment1) - Creates a new payment on the vendor account and assigns the payment to the invoice.
* [create4](docs/vendorinvoices/README.md#create4) - Creates a new invoice.
* [delete6](docs/vendorinvoices/README.md#delete6) - Removes a provider invoice.
* [delete7](docs/vendorinvoices/README.md#delete7) - Removes a provider payment.
* [getAllIds3](docs/vendorinvoices/README.md#getallids3) - Returns vendor invoices' internal identifiers.
* [getAll2](docs/vendorinvoices/README.md#getall2) - Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* [getById3](docs/vendorinvoices/README.md#getbyid3) - Returns provider invoice details.
* [getDocument1](docs/vendorinvoices/README.md#getdocument1) - Generates provider invoice document (PDF).
* [getPayments1](docs/vendorinvoices/README.md#getpayments1) - Returns all payments for the vendor invoice.
* [send](docs/vendorinvoices/README.md#send) - Sends a provider invoice.
* [setStatus](docs/vendorinvoices/README.md#setstatus) - Changes invoice status to given status.

### [vendors](docs/vendors/README.md)

* [delete10](docs/vendors/README.md#delete10) - Removes a provider.
* [delete8](docs/vendors/README.md#delete8) - Removes a person.
* [delete9](docs/vendors/README.md#delete9) - Removes a provider price list.
* [getAddress1](docs/vendors/README.md#getaddress1) - Returns address of a given provider.
* [getAllIds4](docs/vendors/README.md#getallids4) - Returns persons' internal identifiers.
* [getAllIds5](docs/vendors/README.md#getallids5) - Returns providers' internal identifiers.
* [getById4](docs/vendors/README.md#getbyid4) - Returns person details.
* [getById5](docs/vendors/README.md#getbyid5) - Returns provider details.
* [getCompetencies](docs/vendors/README.md#getcompetencies) - Returns competencies of a given provider.
* [getContact2](docs/vendors/README.md#getcontact2) - Returns contact of a given person.
* [getContact3](docs/vendors/README.md#getcontact3) - Returns contact of a given provider.
* [getCorrespondenceAddress1](docs/vendors/README.md#getcorrespondenceaddress1) - Returns correspondence address of a given provider.
* [getCustomFields2](docs/vendors/README.md#getcustomfields2) - Returns custom fields of a given person.
* [getCustomFields3](docs/vendors/README.md#getcustomfields3) - Returns custom fields of a given provider.
* [sendInvitations](docs/vendors/README.md#sendinvitations) - Sends invitation to Vendor Portal.
* [sendInvitations1](docs/vendors/README.md#sendinvitations1) - Sends invitations to Vendor Portal.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
