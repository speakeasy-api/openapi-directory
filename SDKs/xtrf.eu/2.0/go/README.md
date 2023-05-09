# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/xtrf.eu/2.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Browser.BrowseCSV(ctx, operations.BrowseCSVRequest{
        AdditionalOrder: sdk.String("corrupti"),
        SecondarySeparator: sdk.String("provident"),
        Separator: sdk.String("distinctio"),
        ViewID: sdk.Int64(844266),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Browser](docs/browser/README.md)

* [BrowseCSV](docs/browser/README.md#browsecsv) - Searches for data (ie. customer, task, etc) and returns it in a CSV form.
* [BrowseJSON](docs/browser/README.md#browsejson) - Searches for data (ie. customer, task, etc) and returns it in a tabular form.
* [Create](docs/browser/README.md#create) - Creates view for given class.
* [Delete](docs/browser/README.md#delete) - Removes a view.
* [DeleteColumn](docs/browser/README.md#deletecolumn) - Deletes a single column from view.
* [Get](docs/browser/README.md#get) - Returns all view's information.
* [GetColumnSettings](docs/browser/README.md#getcolumnsettings) - Returns column's specific settings.
* [GetColumns](docs/browser/README.md#getcolumns) - Returns columns defined in view.
* [GetCurrentViewDetails](docs/browser/README.md#getcurrentviewdetails) - Returns current view's detailed information, suitable for browser.
* [GetFilter](docs/browser/README.md#getfilter) - Returns view's filter.
* [GetLocalSettings](docs/browser/README.md#getlocalsettings) - Returns view's local settings (for current user).
* [GetOrder](docs/browser/README.md#getorder) - Returns view's order settings.
* [GetPermissions](docs/browser/README.md#getpermissions) - Returns view's permissions.
* [GetSettings](docs/browser/README.md#getsettings) - Returns view's settings.
* [GetViewDetails](docs/browser/README.md#getviewdetails) - Returns view's detailed information, suitable for browser.
* [GetViewsBrief](docs/browser/README.md#getviewsbrief) - Returns views' brief.
* [SelectViewAndGetItsDetails](docs/browser/README.md#selectviewandgetitsdetails) - Selects given view as current and returns its detailed information, suitable for browser.
* [Update](docs/browser/README.md#update) - Updates all view's information.
* [UpdateColumnSettings](docs/browser/README.md#updatecolumnsettings) - Updates column's specific settings.
* [UpdateColumns](docs/browser/README.md#updatecolumns) - Updates columns in view.
* [UpdateFilter](docs/browser/README.md#updatefilter) - Updates view's filter.
* [UpdateFilterProperty](docs/browser/README.md#updatefilterproperty) - Updates view's filter property.
* [UpdateLocalSettings](docs/browser/README.md#updatelocalsettings) - Updates view's local settings (for current user).
* [UpdateOrder](docs/browser/README.md#updateorder) - Updates view's order settings.
* [UpdatePermissions](docs/browser/README.md#updatepermissions) - Updates view's permissions.
* [UpdateSettings](docs/browser/README.md#updatesettings) - Updates view's settings.

### [ClientInvoices](docs/clientinvoices/README.md)

* [CreatePayment](docs/clientinvoices/README.md#createpayment) - Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.
* [Create1](docs/clientinvoices/README.md#create1) - Creates a new invoice.
* [Delete1](docs/clientinvoices/README.md#delete1) - Removes a client invoice.
* [Delete2](docs/clientinvoices/README.md#delete2) - Removes a customer payment.
* [DownloadDocuments](docs/clientinvoices/README.md#downloaddocuments) - Generates client invoices' documents.
* [Duplicate](docs/clientinvoices/README.md#duplicate) - Duplicate client invoice.
* [DuplicateAsProForma](docs/clientinvoices/README.md#duplicateasproforma) - Duplicate client invoice as pro forma.
* [GetAll](docs/clientinvoices/README.md#getall) - Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* [GetAllIds](docs/clientinvoices/README.md#getallids) - Returns client invoices' internal identifiers.
* [GetByID](docs/clientinvoices/README.md#getbyid) - Returns client invoice details.
* [GetDates](docs/clientinvoices/README.md#getdates) - Returns dates of a given client invoice.
* [GetDocument](docs/clientinvoices/README.md#getdocument) - Generates client invoice document (PDF).
* [GetPaymentTerms](docs/clientinvoices/README.md#getpaymentterms) - Returns payment terms of a given client invoice.
* [GetPayments](docs/clientinvoices/README.md#getpayments) - Returns all payments for the client invoice.
* [SendReminder](docs/clientinvoices/README.md#sendreminder) - Sends reminder.
* [SendReminders](docs/clientinvoices/README.md#sendreminders) - Sends reminders. Returns number of sent e-mails.

### [Clients](docs/clients/README.md)

* [Create2](docs/clients/README.md#create2) - Creates a new person.
* [Create3](docs/clients/README.md#create3) - Creates a new client.
* [Delete3](docs/clients/README.md#delete3) - Removes a person.
* [Delete4](docs/clients/README.md#delete4) - Removes a customer price list.
* [Delete5](docs/clients/README.md#delete5) - Removes a client.
* [GenerateSingleUseSignInToken](docs/clients/README.md#generatesingleusesignintoken) - Generates a single use sign-in token.
* [GetAddress](docs/clients/README.md#getaddress) - Returns address of a given client.
* [GetAllIds1](docs/clients/README.md#getallids1) - Returns persons' internal identifiers.
* [GetAllIds2](docs/clients/README.md#getallids2) - Returns clients' internal identifiers.
* [GetAllNamesWithIds](docs/clients/README.md#getallnameswithids) - Returns list of simple clients representations
* [GetByID1](docs/clients/README.md#getbyid1) - Returns person details.
* [GetByID2](docs/clients/README.md#getbyid2) - Returns client details.
* [GetCategories](docs/clients/README.md#getcategories) - Returns categories of a given client.
* [GetContact](docs/clients/README.md#getcontact) - Returns contact of a given person.
* [GetContact1](docs/clients/README.md#getcontact1) - Returns contact of a given client.
* [GetCorrespondenceAddress](docs/clients/README.md#getcorrespondenceaddress) - Returns correspondence address of a given client.
* [GetCustomField](docs/clients/README.md#getcustomfield) - Returns custom field of a given client.
* [GetCustomFields](docs/clients/README.md#getcustomfields) - Returns custom fields of a given person.
* [GetCustomFields1](docs/clients/README.md#getcustomfields1) - Returns custom fields of a given client.
* [GetIndustries](docs/clients/README.md#getindustries) - Returns industries of a given client.
* [UpdateAddress](docs/clients/README.md#updateaddress) - Updates address of a given client.
* [UpdateCategories](docs/clients/README.md#updatecategories) - Updates categories of a given client.
* [UpdateContact](docs/clients/README.md#updatecontact) - Updates contact of a given person.
* [UpdateContact1](docs/clients/README.md#updatecontact1) - Updates contact of a given client.
* [UpdateCorrespondenceAddress](docs/clients/README.md#updatecorrespondenceaddress) - Updates correspondence address of a given client.
* [UpdateCustomField](docs/clients/README.md#updatecustomfield) - Updates given custom field of a given client.
* [UpdateCustomFields](docs/clients/README.md#updatecustomfields) - Updates custom fields of a given person.
* [UpdateCustomFields1](docs/clients/README.md#updatecustomfields1) - Updates custom fields of a given client.
* [UpdateIndustries](docs/clients/README.md#updateindustries) - Updates industries of a given client.
* [Update1](docs/clients/README.md#update1) - Updates an existing person.
* [Update2](docs/clients/README.md#update2) - Updates an existing client.

### [CurrencyExchangeRates](docs/currencyexchangerates/README.md)

* [CreateExchangeRate](docs/currencyexchangerates/README.md#createexchangerate) - Adding currency exchange rates.
* [GetByIsoCode](docs/currencyexchangerates/README.md#getbyisocode) - Returns currency exchange rates.

### [Dictionaries](docs/dictionaries/README.md)

* [GetActive](docs/dictionaries/README.md#getactive) - Returns active dictionary entities for all types.
* [GetActiveByType](docs/dictionaries/README.md#getactivebytype) - Returns active values from a given dictionary.
* [GetAllActive](docs/dictionaries/README.md#getallactive) - Returns active services list
* [GetAllByType](docs/dictionaries/README.md#getallbytype) - Returns all values (both active and not active) from a given dictionary.
* [GetAll1](docs/dictionaries/README.md#getall1) - Returns dictionary entities for all types. Both active and not active ones.
* [GetAll3](docs/dictionaries/README.md#getall3) - Returns services list
* [GetByTypeAndID](docs/dictionaries/README.md#getbytypeandid) - Returns specific value from a given dictionary.

### [Files](docs/files/README.md)

* [UploadFile](docs/files/README.md#uploadfile) - Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.

### [JobsClassic](docs/jobsclassic/README.md)

* [AssignFileToJobOutput](docs/jobsclassic/README.md#assignfiletojoboutput)
* [AssignVendor](docs/jobsclassic/README.md#assignvendor) - Assigns vendor to a job in a project.
* [ChangeStatus](docs/jobsclassic/README.md#changestatus) - Changes job status if possible (400 Bad Request is returned otherwise).
* [GetJobDetails](docs/jobsclassic/README.md#getjobdetails) - Returns job details by jobId.
* [GetJobFiles](docs/jobsclassic/README.md#getjobfiles) - Returns list of input and output files of a job.
* [GetJobFiles1](docs/jobsclassic/README.md#getjobfiles1) - Returns file metadata.
* [UpdateDates](docs/jobsclassic/README.md#updatedates) - Updates dates of a given job.
* [UpdateInstructions](docs/jobsclassic/README.md#updateinstructions) - Updates instructions for a job.

### [JobsSmartV2](docs/jobssmartv2/README.md)

* [AddExternalFileLink](docs/jobssmartv2/README.md#addexternalfilelink)
* [AddFileLinks](docs/jobssmartv2/README.md#addfilelinks) - Adds file link to the project as a link delivered in the job.
* [AddFiles](docs/jobssmartv2/README.md#addfiles) - Adds files to the project as delivered in the job.
* [AssignVendor1](docs/jobssmartv2/README.md#assignvendor1) - Assigns vendor to a job in a project.
* [ChangeDates](docs/jobssmartv2/README.md#changedates) - Updates dates of a given job.
* [ChangeStatus1](docs/jobssmartv2/README.md#changestatus1) - Changes job status if possible (400 Bad Request is returned otherwise).
* [GetByExternalID](docs/jobssmartv2/README.md#getbyexternalid)
* [GetDeliveredFiles](docs/jobssmartv2/README.md#getdeliveredfiles) - Returns list of files delivered in the job.
* [GetFileByID1](docs/jobssmartv2/README.md#getfilebyid1) - Returns details for a job.
* [GetSharedReferenceFiles](docs/jobssmartv2/README.md#getsharedreferencefiles) - Returns list of files shared with the job as Reference Files.
* [GetSharedWorkFiles](docs/jobssmartv2/README.md#getsharedworkfiles) - Returns list of files shared with the job as Work Files.
* [ShareAsReferenceFiles](docs/jobssmartv2/README.md#shareasreferencefiles) - Shares selected files as Reference Files with a job in a project.
* [ShareAsWorkFiles](docs/jobssmartv2/README.md#shareasworkfiles) - Shares selected files as Work Files with a job in a project.
* [StopSharing](docs/jobssmartv2/README.md#stopsharing) - Stops sharing selected files with a job in a project.
* [UpdateInstructions4](docs/jobssmartv2/README.md#updateinstructions4) - Updates instructions for a job.
* [UploadFile1](docs/jobssmartv2/README.md#uploadfile1) - Uploads file to the project as a file delivered in the job.

### [License](docs/license/README.md)

* [GetLicense](docs/license/README.md#getlicense) - Returns license content.
* [Refresh](docs/license/README.md#refresh) - Refreshes license content.

### [Macros](docs/macros/README.md)

* [Run](docs/macros/README.md#run) - Executes a macro.

### [ProjectsClassic](docs/projectsclassic/README.md)

* [CreateLanguageCombination](docs/projectsclassic/README.md#createlanguagecombination) - Creates a new language combination for a given project without creating a task.
* [CreatePayable](docs/projectsclassic/README.md#createpayable) - Adds a payable to a project.
* [CreateReceivable](docs/projectsclassic/README.md#createreceivable) - Adds a receivable to a project.
* [CreateTask](docs/projectsclassic/README.md#createtask) - Creates a new task for a given project.
* [Create5](docs/projectsclassic/README.md#create5) - Creates a new Classic Project.
* [DeletePayable](docs/projectsclassic/README.md#deletepayable) - Deletes a payable.
* [DeleteReceivable](docs/projectsclassic/README.md#deletereceivable) - Deletes a receivable.
* [Delete12](docs/projectsclassic/README.md#delete12) - Removes a project.
* [GetAllIds6](docs/projectsclassic/README.md#getallids6) - Returns projects' internal identifiers.
* [GetByID7](docs/projectsclassic/README.md#getbyid7) - Returns project details.
* [GetContacts](docs/projectsclassic/README.md#getcontacts) - Returns contacts of a given project.
* [GetCustomFields5](docs/projectsclassic/README.md#getcustomfields5) - Returns custom fields of a given project.
* [GetDates1](docs/projectsclassic/README.md#getdates1) - Returns dates of a given project.
* [GetFileByID](docs/projectsclassic/README.md#getfilebyid) - Downloads a file.
* [GetFinance](docs/projectsclassic/README.md#getfinance) - Returns finance of a given project.
* [GetInstructions](docs/projectsclassic/README.md#getinstructions) - Returns instructions of a given project.
* [UpdateContacts](docs/projectsclassic/README.md#updatecontacts) - Updates contacts of a given project.
* [UpdateCustomFields3](docs/projectsclassic/README.md#updatecustomfields3) - Updates custom fields of a given project.
* [UpdateDates1](docs/projectsclassic/README.md#updatedates1) - Updates dates of a given project.
* [UpdateInstructions1](docs/projectsclassic/README.md#updateinstructions1) - Updates instructions of a given project.
* [UpdatePayable](docs/projectsclassic/README.md#updatepayable) - Updates a payable.
* [UpdateReceivable](docs/projectsclassic/README.md#updatereceivable) - Updates a receivable.

### [ProjectsSmartV2](docs/projectssmartv2/README.md)

* [AddExternalFileLinks](docs/projectssmartv2/README.md#addexternalfilelinks)
* [AddFileLinks1](docs/projectssmartv2/README.md#addfilelinks1) - Adds file links to the project as added by PM.
* [AddFiles1](docs/projectssmartv2/README.md#addfiles1) - Adds files to the project as added by PM.
* [AddJobToProcess](docs/projectssmartv2/README.md#addjobtoprocess) - Returns process id.
* [Archive](docs/projectssmartv2/README.md#archive) - Prepares a ZIP archive that contains the specified files.
* [ChangeStatus2](docs/projectssmartv2/README.md#changestatus2) - Changes project status if possible (400 Bad Request is returned otherwise).
* [CreatePayable2](docs/projectssmartv2/README.md#createpayable2) - Adds a payable to a project.
* [CreateReceivable2](docs/projectssmartv2/README.md#createreceivable2) - Adds a receivable to a project.
* [Create6](docs/projectssmartv2/README.md#create6) - Creates a new Smart Project.
* [DeletePayable2](docs/projectssmartv2/README.md#deletepayable2) - Deletes a payable.
* [DeleteReceivable2](docs/projectssmartv2/README.md#deletereceivable2) - Deletes a receivable.
* [GetByExternalID1](docs/projectssmartv2/README.md#getbyexternalid1) - Returns project details.
* [GetByID9](docs/projectssmartv2/README.md#getbyid9) - Returns project details.
* [GetCATToolProjectInfo](docs/projectssmartv2/README.md#getcattoolprojectinfo) - Returns if cat tool project is created or queued.
* [GetContacts2](docs/projectssmartv2/README.md#getcontacts2) - Returns Client Contacts information for a project.
* [GetCustomFields8](docs/projectssmartv2/README.md#getcustomfields8) - Returns a list of custom field keys and values for a project.
* [GetDeliverableFiles](docs/projectssmartv2/README.md#getdeliverablefiles) - Returns list of files in a project, that are ready to be delivered to client.
* [GetFileByID2](docs/projectssmartv2/README.md#getfilebyid2) - Returns details of a file.
* [GetFileContentByID](docs/projectssmartv2/README.md#getfilecontentbyid) - Downloads a file content.
* [GetFiles](docs/projectssmartv2/README.md#getfiles) - Returns list of files in a project.
* [GetFinance2](docs/projectssmartv2/README.md#getfinance2) - Returns finance information for a project.
* [GetJobs](docs/projectssmartv2/README.md#getjobs) - Returns list of jobs in a project.
* [GetProcessID](docs/projectssmartv2/README.md#getprocessid) - Returns process id.
* [UpdateClientDeadline](docs/projectssmartv2/README.md#updateclientdeadline) - Updates Client Deadline for a project.
* [UpdateClientNotes](docs/projectssmartv2/README.md#updateclientnotes) - Updates Client Notes for a project.
* [UpdateClientReferenceNumber](docs/projectssmartv2/README.md#updateclientreferencenumber) - Updates Client Reference Number for a project.
* [UpdateContacts2](docs/projectssmartv2/README.md#updatecontacts2) - Updates Client Contacts for a project.
* [UpdateCustomField2](docs/projectssmartv2/README.md#updatecustomfield2) - Updates a custom field with a specified key in a project
* [UpdateInternalNotes](docs/projectssmartv2/README.md#updateinternalnotes) - Updates Internal Notes for a project.
* [UpdateOrderedOn](docs/projectssmartv2/README.md#updateorderedon) - Updates Order Date for a project.
* [UpdatePayable2](docs/projectssmartv2/README.md#updatepayable2) - Updates a payable.
* [UpdateReceivable2](docs/projectssmartv2/README.md#updatereceivable2) - Updates a receivable.
* [UpdateSourceLanguage](docs/projectssmartv2/README.md#updatesourcelanguage) - Updates source language for a project.
* [UpdateSpecialization](docs/projectssmartv2/README.md#updatespecialization) - Updates specialization for a project.
* [UpdateTargetLanguages](docs/projectssmartv2/README.md#updatetargetlanguages) - Updates target languages for a project.
* [UpdateVendorInstructions](docs/projectssmartv2/README.md#updatevendorinstructions) - Updates instructions for all vendors performing the jobs in a project.
* [UpdateVolume](docs/projectssmartv2/README.md#updatevolume) - Updates volume for a project.
* [UploadFile2](docs/projectssmartv2/README.md#uploadfile2) - Uploads file to the project as a file uploaded by PM.

### [QuotesClassic](docs/quotesclassic/README.md)

* [CreateLanguageCombination1](docs/quotesclassic/README.md#createlanguagecombination1) - Creates a new language combination for a given quote without creating a task.
* [CreatePayable1](docs/quotesclassic/README.md#createpayable1) - Adds a payable.
* [CreateReceivable1](docs/quotesclassic/README.md#createreceivable1) - Adds a receivable.
* [CreateTask1](docs/quotesclassic/README.md#createtask1) - Creates a new task for a given quote.
* [DeletePayable1](docs/quotesclassic/README.md#deletepayable1) - Deletes a payable.
* [DeleteReceivable1](docs/quotesclassic/README.md#deletereceivable1) - Deletes a receivable.
* [Delete13](docs/quotesclassic/README.md#delete13) - Removes a quote.
* [GetAllIds7](docs/quotesclassic/README.md#getallids7) - Returns quotes' internal identifiers.
* [GetByID8](docs/quotesclassic/README.md#getbyid8) - Returns quote details.
* [GetCustomFields6](docs/quotesclassic/README.md#getcustomfields6) - Returns custom fields of a given quote.
* [GetDates2](docs/quotesclassic/README.md#getdates2) - Returns dates of a given quote.
* [GetFinance1](docs/quotesclassic/README.md#getfinance1) - Returns finance of a given quote.
* [GetInstructions1](docs/quotesclassic/README.md#getinstructions1) - Returns instructions of a given quote.
* [Send1](docs/quotesclassic/README.md#send1) - Sends a quote for customer confirmation.
* [Start](docs/quotesclassic/README.md#start) - Starts a quote.
* [UpdateCustomFields4](docs/quotesclassic/README.md#updatecustomfields4) - Updates custom fields of a given quote.
* [UpdateInstructions2](docs/quotesclassic/README.md#updateinstructions2) - Updates instructions of a given quote.
* [UpdatePayable1](docs/quotesclassic/README.md#updatepayable1) - Updates a payable.
* [UpdateReceivable1](docs/quotesclassic/README.md#updatereceivable1) - Updates a receivable.

### [QuotesSmartV2](docs/quotessmartv2/README.md)

* [AddFiles2](docs/quotessmartv2/README.md#addfiles2) - Adds files to the quote as added by PM.
* [Archive1](docs/quotessmartv2/README.md#archive1) - Prepares a ZIP archive that contains the specified files.
* [ChangeStatus3](docs/quotessmartv2/README.md#changestatus3) - Changes quote status if possible (400 Bad Request is returned otherwise).
* [CreatePayable3](docs/quotessmartv2/README.md#createpayable3) - Adds a payable to a quote.
* [CreateReceivable3](docs/quotessmartv2/README.md#createreceivable3) - Adds a receivable to a quote.
* [Create7](docs/quotessmartv2/README.md#create7) - Creates a new Smart Quote.
* [DeletePayable3](docs/quotessmartv2/README.md#deletepayable3) - Deletes a payable.
* [DeleteReceivable3](docs/quotessmartv2/README.md#deletereceivable3) - Deletes a receivable.
* [GetByID10](docs/quotessmartv2/README.md#getbyid10) - Returns quote details.
* [GetContacts3](docs/quotessmartv2/README.md#getcontacts3) - Returns Client Contacts information for a quote.
* [GetCustomFields9](docs/quotessmartv2/README.md#getcustomfields9) - Returns a list of custom field keys and values for a project.
* [GetFileByID3](docs/quotessmartv2/README.md#getfilebyid3) - Returns details of a file.
* [GetFileContentByID1](docs/quotessmartv2/README.md#getfilecontentbyid1) - Downloads a file content.
* [GetFiles1](docs/quotessmartv2/README.md#getfiles1) - Returns list of files in a quote.
* [GetFinance3](docs/quotessmartv2/README.md#getfinance3) - Returns finance information for a quote.
* [GetJobs1](docs/quotessmartv2/README.md#getjobs1) - Returns list of jobs in a quote.
* [UpdateBusinessDays](docs/quotessmartv2/README.md#updatebusinessdays) - Updates Business Days for a quote.
* [UpdateClientNotes1](docs/quotessmartv2/README.md#updateclientnotes1) - Updates Client Notes for a quote.
* [UpdateClientReferenceNumber1](docs/quotessmartv2/README.md#updateclientreferencenumber1) - Updates Client Reference Number for a quote.
* [UpdateContacts3](docs/quotessmartv2/README.md#updatecontacts3) - Updates Client Contacts for a quote.
* [UpdateCustomField3](docs/quotessmartv2/README.md#updatecustomfield3) - Updates a custom field with a specified key in a quote.
* [UpdateExpectedDeliveryDate](docs/quotessmartv2/README.md#updateexpecteddeliverydate) - Updates Expected Delivery Date for a quote.
* [UpdateInternalNotes1](docs/quotessmartv2/README.md#updateinternalnotes1) - Updates Internal Notes for a quote.
* [UpdatePayable3](docs/quotessmartv2/README.md#updatepayable3) - Updates a payable.
* [UpdateQuoteExpiry](docs/quotessmartv2/README.md#updatequoteexpiry) - Updates Quote Expiry Date for a quote.
* [UpdateReceivable3](docs/quotessmartv2/README.md#updatereceivable3) - Updates a receivable.
* [UpdateSourceLanguage1](docs/quotessmartv2/README.md#updatesourcelanguage1) - Updates source language for a quote.
* [UpdateSpecialization1](docs/quotessmartv2/README.md#updatespecialization1) - Updates specialization for a quote.
* [UpdateTargetLanguages1](docs/quotessmartv2/README.md#updatetargetlanguages1) - Updates target languages for a quote.
* [UpdateVendorInstructions1](docs/quotessmartv2/README.md#updatevendorinstructions1) - Updates instructions for all vendors performing the jobs in a quote.
* [UpdateVolume1](docs/quotessmartv2/README.md#updatevolume1) - Updates volume for a quote.
* [UploadFile3](docs/quotessmartv2/README.md#uploadfile3) - Uploads file to the quote as a file uploaded by PM.

### [Reports](docs/reports/README.md)

* [Delete11](docs/reports/README.md#delete11) - Removes a report.
* [Duplicate1](docs/reports/README.md#duplicate1) - Duplicates a report.
* [ExportToXML](docs/reports/README.md#exporttoxml) - Exports reports definition to XML.
* [GenerateCSV](docs/reports/README.md#generatecsv) - Generates CSV content for a report.
* [GeneratePrinterFriendly](docs/reports/README.md#generateprinterfriendly) - Generates printer friendly content for a report.
* [ImportFromXML](docs/reports/README.md#importfromxml) - Imports reports definition from XML.
* [SetPreferred](docs/reports/README.md#setpreferred) - Marks report as preferred or not.

### [Subscription](docs/subscription/README.md)

* [AreHooksSupported](docs/subscription/README.md#arehookssupported) - This method can be used to determine if hooks are supported.
* [GetAll4](docs/subscription/README.md#getall4) - Returns all subscriptions
* [Subscribe](docs/subscription/README.md#subscribe) - Subscribe to event
* [Unsubscribe](docs/subscription/README.md#unsubscribe) - Unsubscribe from event

### [TasksClassic](docs/tasksclassic/README.md)

* [AddFile](docs/tasksclassic/README.md#addfile) - Adds files to a given task.
* [Delete14](docs/tasksclassic/README.md#delete14) - Removes a task.
* [GetContacts1](docs/tasksclassic/README.md#getcontacts1) - Returns contacts of a given task.
* [GetCustomFields7](docs/tasksclassic/README.md#getcustomfields7) - Returns custom fields of a given task.
* [GetDates3](docs/tasksclassic/README.md#getdates3) - Returns dates of a given task.
* [GetInstructions2](docs/tasksclassic/README.md#getinstructions2) - Returns instructions of a given task.
* [GetProgress](docs/tasksclassic/README.md#getprogress) - Returns progress of a given task.
* [GetTaskFiles](docs/tasksclassic/README.md#gettaskfiles) - Returns lists of files of a given task.
* [Start1](docs/tasksclassic/README.md#start1) - Starts a task.
* [UpdateClientTaskPONumber](docs/tasksclassic/README.md#updateclienttaskponumber) - Updates Client Task PO Number of a given task.
* [UpdateContacts1](docs/tasksclassic/README.md#updatecontacts1) - Updates contacts of a given task.
* [UpdateCustomFields5](docs/tasksclassic/README.md#updatecustomfields5) - Updates custom fields of a given task.
* [UpdateDates2](docs/tasksclassic/README.md#updatedates2) - Updates dates of a given task.
* [UpdateInstructions3](docs/tasksclassic/README.md#updateinstructions3) - Updates instructions of a given task.
* [UpdateName](docs/tasksclassic/README.md#updatename) - Updates name of a given task.

### [Users](docs/users/README.md)

* [ChangePassword](docs/users/README.md#changepassword) - Sets user's password to a new value.
* [GetAllNamesWithIds1](docs/users/README.md#getallnameswithids1) - Returns list of simple users representations
* [GetByID6](docs/users/README.md#getbyid6) - Returns user details.
* [GetCustomField1](docs/users/README.md#getcustomfield1) - Returns custom field of a given user.
* [GetCustomFields4](docs/users/README.md#getcustomfields4) - Returns custom fields of a given user.
* [GetMe](docs/users/README.md#getme) - Returns currently signed in user details.
* [GetTimeZone](docs/users/README.md#gettimezone) - Returns time zone preferred by user currently signed in.
* [UpdateCustomField1](docs/users/README.md#updatecustomfield1) - Updates given custom field of a given user.
* [UpdateCustomFields2](docs/users/README.md#updatecustomfields2) - Updates custom fields of a given user.
* [Update3](docs/users/README.md#update3) - Updates an existing user.

### [VendorInvoices](docs/vendorinvoices/README.md)

* [CreatePayment1](docs/vendorinvoices/README.md#createpayment1) - Creates a new payment on the vendor account and assigns the payment to the invoice.
* [Create4](docs/vendorinvoices/README.md#create4) - Creates a new invoice.
* [Delete6](docs/vendorinvoices/README.md#delete6) - Removes a provider invoice.
* [Delete7](docs/vendorinvoices/README.md#delete7) - Removes a provider payment.
* [GetAllIds3](docs/vendorinvoices/README.md#getallids3) - Returns vendor invoices' internal identifiers.
* [GetAll2](docs/vendorinvoices/README.md#getall2) - Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* [GetByID3](docs/vendorinvoices/README.md#getbyid3) - Returns provider invoice details.
* [GetDocument1](docs/vendorinvoices/README.md#getdocument1) - Generates provider invoice document (PDF).
* [GetPayments1](docs/vendorinvoices/README.md#getpayments1) - Returns all payments for the vendor invoice.
* [Send](docs/vendorinvoices/README.md#send) - Sends a provider invoice.
* [SetStatus](docs/vendorinvoices/README.md#setstatus) - Changes invoice status to given status.

### [Vendors](docs/vendors/README.md)

* [Delete10](docs/vendors/README.md#delete10) - Removes a provider.
* [Delete8](docs/vendors/README.md#delete8) - Removes a person.
* [Delete9](docs/vendors/README.md#delete9) - Removes a provider price list.
* [GetAddress1](docs/vendors/README.md#getaddress1) - Returns address of a given provider.
* [GetAllIds4](docs/vendors/README.md#getallids4) - Returns persons' internal identifiers.
* [GetAllIds5](docs/vendors/README.md#getallids5) - Returns providers' internal identifiers.
* [GetByID4](docs/vendors/README.md#getbyid4) - Returns person details.
* [GetByID5](docs/vendors/README.md#getbyid5) - Returns provider details.
* [GetCompetencies](docs/vendors/README.md#getcompetencies) - Returns competencies of a given provider.
* [GetContact2](docs/vendors/README.md#getcontact2) - Returns contact of a given person.
* [GetContact3](docs/vendors/README.md#getcontact3) - Returns contact of a given provider.
* [GetCorrespondenceAddress1](docs/vendors/README.md#getcorrespondenceaddress1) - Returns correspondence address of a given provider.
* [GetCustomFields2](docs/vendors/README.md#getcustomfields2) - Returns custom fields of a given person.
* [GetCustomFields3](docs/vendors/README.md#getcustomfields3) - Returns custom fields of a given provider.
* [SendInvitations](docs/vendors/README.md#sendinvitations) - Sends invitation to Vendor Portal.
* [SendInvitations1](docs/vendors/README.md#sendinvitations1) - Sends invitations to Vendor Portal.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
