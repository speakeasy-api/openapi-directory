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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: &shared.SchemeXAuthAccessToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BrowseCSVRequest{
        QueryParams: operations.BrowseCSVQueryParams{
            AdditionalOrder: "unde",
            SecondarySeparator: "deserunt",
            Separator: "porro",
            ViewID: 844266,
        },
    }

    ctx := context.Background()
    res, err := s.Browser.BrowseCSV(ctx, req)
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
## SDK Available Operations


### Browser

* `BrowseCSV` - Searches for data (ie. customer, task, etc) and returns it in a CSV form.
* `BrowseJSON` - Searches for data (ie. customer, task, etc) and returns it in a tabular form.
* `Create` - Creates view for given class.
* `Delete` - Removes a view.
* `DeleteColumn` - Deletes a single column from view.
* `Get` - Returns all view's information.
* `GetColumnSettings` - Returns column's specific settings.
* `GetColumns` - Returns columns defined in view.
* `GetCurrentViewDetails` - Returns current view's detailed information, suitable for browser.
* `GetFilter` - Returns view's filter.
* `GetLocalSettings` - Returns view's local settings (for current user).
* `GetOrder` - Returns view's order settings.
* `GetPermissions` - Returns view's permissions.
* `GetSettings` - Returns view's settings.
* `GetViewDetails` - Returns view's detailed information, suitable for browser.
* `GetViewsBrief` - Returns views' brief.
* `SelectViewAndGetItsDetails` - Selects given view as current and returns its detailed information, suitable for browser.
* `Update` - Updates all view's information.
* `UpdateColumnSettings` - Updates column's specific settings.
* `UpdateColumns` - Updates columns in view.
* `UpdateFilter` - Updates view's filter.
* `UpdateFilterProperty` - Updates view's filter property.
* `UpdateLocalSettings` - Updates view's local settings (for current user).
* `UpdateOrder` - Updates view's order settings.
* `UpdatePermissions` - Updates view's permissions.
* `UpdateSettings` - Updates view's settings.

### ClientInvoices

* `CreatePayment` - Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.
* `Create1` - Creates a new invoice.
* `Delete1` - Removes a client invoice.
* `Delete2` - Removes a customer payment.
* `DownloadDocuments` - Generates client invoices' documents.
* `Duplicate` - Duplicate client invoice.
* `DuplicateAsProForma` - Duplicate client invoice as pro forma.
* `GetAll` - Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* `GetAllIds` - Returns client invoices' internal identifiers.
* `GetByID` - Returns client invoice details.
* `GetDates` - Returns dates of a given client invoice.
* `GetDocument` - Generates client invoice document (PDF).
* `GetPaymentTerms` - Returns payment terms of a given client invoice.
* `GetPayments` - Returns all payments for the client invoice.
* `SendReminder` - Sends reminder.
* `SendReminders` - Sends reminders. Returns number of sent e-mails.

### Clients

* `Create2` - Creates a new person.
* `Create3` - Creates a new client.
* `Delete3` - Removes a person.
* `Delete4` - Removes a customer price list.
* `Delete5` - Removes a client.
* `GenerateSingleUseSignInToken` - Generates a single use sign-in token.
* `GetAddress` - Returns address of a given client.
* `GetAllIds1` - Returns persons' internal identifiers.
* `GetAllIds2` - Returns clients' internal identifiers.
* `GetAllNamesWithIds` - Returns list of simple clients representations
* `GetByID1` - Returns person details.
* `GetByID2` - Returns client details.
* `GetCategories` - Returns categories of a given client.
* `GetContact` - Returns contact of a given person.
* `GetContact1` - Returns contact of a given client.
* `GetCorrespondenceAddress` - Returns correspondence address of a given client.
* `GetCustomField` - Returns custom field of a given client.
* `GetCustomFields` - Returns custom fields of a given person.
* `GetCustomFields1` - Returns custom fields of a given client.
* `GetIndustries` - Returns industries of a given client.
* `UpdateAddress` - Updates address of a given client.
* `UpdateCategories` - Updates categories of a given client.
* `UpdateContact` - Updates contact of a given person.
* `UpdateContact1` - Updates contact of a given client.
* `UpdateCorrespondenceAddress` - Updates correspondence address of a given client.
* `UpdateCustomField` - Updates given custom field of a given client.
* `UpdateCustomFields` - Updates custom fields of a given person.
* `UpdateCustomFields1` - Updates custom fields of a given client.
* `UpdateIndustries` - Updates industries of a given client.
* `Update1` - Updates an existing person.
* `Update2` - Updates an existing client.

### CurrencyExchangeRates

* `CreateExchangeRate` - Adding currency exchange rates.
* `GetByIsoCode` - Returns currency exchange rates.

### Dictionaries

* `GetActive` - Returns active dictionary entities for all types.
* `GetActiveByType` - Returns active values from a given dictionary.
* `GetAllActive` - Returns active services list
* `GetAllByType` - Returns all values (both active and not active) from a given dictionary.
* `GetAll1` - Returns dictionary entities for all types. Both active and not active ones.
* `GetAll3` - Returns services list
* `GetByTypeAndID` - Returns specific value from a given dictionary.

### Files

* `UploadFile` - Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.

### JobsClassic

* `AssignFileToJobOutput`
* `AssignVendor` - Assigns vendor to a job in a project.
* `ChangeStatus` - Changes job status if possible (400 Bad Request is returned otherwise).
* `GetJobDetails` - Returns job details by jobId.
* `GetJobFiles` - Returns list of input and output files of a job.
* `GetJobFiles1` - Returns file metadata.
* `UpdateDates` - Updates dates of a given job.
* `UpdateInstructions` - Updates instructions for a job.

### JobsSmartV2

* `AddExternalFileLink`
* `AddFileLinks` - Adds file link to the project as a link delivered in the job.
* `AddFiles` - Adds files to the project as delivered in the job.
* `AssignVendor1` - Assigns vendor to a job in a project.
* `ChangeDates` - Updates dates of a given job.
* `ChangeStatus1` - Changes job status if possible (400 Bad Request is returned otherwise).
* `GetByExternalID`
* `GetDeliveredFiles` - Returns list of files delivered in the job.
* `GetFileByID1` - Returns details for a job.
* `GetSharedReferenceFiles` - Returns list of files shared with the job as Reference Files.
* `GetSharedWorkFiles` - Returns list of files shared with the job as Work Files.
* `ShareAsReferenceFiles` - Shares selected files as Reference Files with a job in a project.
* `ShareAsWorkFiles` - Shares selected files as Work Files with a job in a project.
* `StopSharing` - Stops sharing selected files with a job in a project.
* `UpdateInstructions4` - Updates instructions for a job.
* `UploadFile1` - Uploads file to the project as a file delivered in the job.

### License

* `GetLicense` - Returns license content.
* `Refresh` - Refreshes license content.

### Macros

* `Run` - Executes a macro.

### ProjectsClassic

* `CreateLanguageCombination` - Creates a new language combination for a given project without creating a task.
* `CreatePayable` - Adds a payable to a project.
* `CreateReceivable` - Adds a receivable to a project.
* `CreateTask` - Creates a new task for a given project.
* `Create5` - Creates a new Classic Project.
* `DeletePayable` - Deletes a payable.
* `DeleteReceivable` - Deletes a receivable.
* `Delete12` - Removes a project.
* `GetAllIds6` - Returns projects' internal identifiers.
* `GetByID7` - Returns project details.
* `GetContacts` - Returns contacts of a given project.
* `GetCustomFields5` - Returns custom fields of a given project.
* `GetDates1` - Returns dates of a given project.
* `GetFileByID` - Downloads a file.
* `GetFinance` - Returns finance of a given project.
* `GetInstructions` - Returns instructions of a given project.
* `UpdateContacts` - Updates contacts of a given project.
* `UpdateCustomFields3` - Updates custom fields of a given project.
* `UpdateDates1` - Updates dates of a given project.
* `UpdateInstructions1` - Updates instructions of a given project.
* `UpdatePayable` - Updates a payable.
* `UpdateReceivable` - Updates a receivable.

### ProjectsSmartV2

* `AddExternalFileLinks`
* `AddFileLinks1` - Adds file links to the project as added by PM.
* `AddFiles1` - Adds files to the project as added by PM.
* `AddJobToProcess` - Returns process id.
* `Archive` - Prepares a ZIP archive that contains the specified files.
* `ChangeStatus2` - Changes project status if possible (400 Bad Request is returned otherwise).
* `CreatePayable2` - Adds a payable to a project.
* `CreateReceivable2` - Adds a receivable to a project.
* `Create6` - Creates a new Smart Project.
* `DeletePayable2` - Deletes a payable.
* `DeleteReceivable2` - Deletes a receivable.
* `GetByExternalID1` - Returns project details.
* `GetByID9` - Returns project details.
* `GetCATToolProjectInfo` - Returns if cat tool project is created or queued.
* `GetContacts2` - Returns Client Contacts information for a project.
* `GetCustomFields8` - Returns a list of custom field keys and values for a project.
* `GetDeliverableFiles` - Returns list of files in a project, that are ready to be delivered to client.
* `GetFileByID2` - Returns details of a file.
* `GetFileContentByID` - Downloads a file content.
* `GetFiles` - Returns list of files in a project.
* `GetFinance2` - Returns finance information for a project.
* `GetJobs` - Returns list of jobs in a project.
* `GetProcessID` - Returns process id.
* `UpdateClientDeadline` - Updates Client Deadline for a project.
* `UpdateClientNotes` - Updates Client Notes for a project.
* `UpdateClientReferenceNumber` - Updates Client Reference Number for a project.
* `UpdateContacts2` - Updates Client Contacts for a project.
* `UpdateCustomField2` - Updates a custom field with a specified key in a project
* `UpdateInternalNotes` - Updates Internal Notes for a project.
* `UpdateOrderedOn` - Updates Order Date for a project.
* `UpdatePayable2` - Updates a payable.
* `UpdateReceivable2` - Updates a receivable.
* `UpdateSourceLanguage` - Updates source language for a project.
* `UpdateSpecialization` - Updates specialization for a project.
* `UpdateTargetLanguages` - Updates target languages for a project.
* `UpdateVendorInstructions` - Updates instructions for all vendors performing the jobs in a project.
* `UpdateVolume` - Updates volume for a project.
* `UploadFile2` - Uploads file to the project as a file uploaded by PM.

### QuotesClassic

* `CreateLanguageCombination1` - Creates a new language combination for a given quote without creating a task.
* `CreatePayable1` - Adds a payable.
* `CreateReceivable1` - Adds a receivable.
* `CreateTask1` - Creates a new task for a given quote.
* `DeletePayable1` - Deletes a payable.
* `DeleteReceivable1` - Deletes a receivable.
* `Delete13` - Removes a quote.
* `GetAllIds7` - Returns quotes' internal identifiers.
* `GetByID8` - Returns quote details.
* `GetCustomFields6` - Returns custom fields of a given quote.
* `GetDates2` - Returns dates of a given quote.
* `GetFinance1` - Returns finance of a given quote.
* `GetInstructions1` - Returns instructions of a given quote.
* `Send1` - Sends a quote for customer confirmation.
* `Start` - Starts a quote.
* `UpdateCustomFields4` - Updates custom fields of a given quote.
* `UpdateInstructions2` - Updates instructions of a given quote.
* `UpdatePayable1` - Updates a payable.
* `UpdateReceivable1` - Updates a receivable.

### QuotesSmartV2

* `AddFiles2` - Adds files to the quote as added by PM.
* `Archive1` - Prepares a ZIP archive that contains the specified files.
* `ChangeStatus3` - Changes quote status if possible (400 Bad Request is returned otherwise).
* `CreatePayable3` - Adds a payable to a quote.
* `CreateReceivable3` - Adds a receivable to a quote.
* `Create7` - Creates a new Smart Quote.
* `DeletePayable3` - Deletes a payable.
* `DeleteReceivable3` - Deletes a receivable.
* `GetByID10` - Returns quote details.
* `GetContacts3` - Returns Client Contacts information for a quote.
* `GetCustomFields9` - Returns a list of custom field keys and values for a project.
* `GetFileByID3` - Returns details of a file.
* `GetFileContentByID1` - Downloads a file content.
* `GetFiles1` - Returns list of files in a quote.
* `GetFinance3` - Returns finance information for a quote.
* `GetJobs1` - Returns list of jobs in a quote.
* `UpdateBusinessDays` - Updates Business Days for a quote.
* `UpdateClientNotes1` - Updates Client Notes for a quote.
* `UpdateClientReferenceNumber1` - Updates Client Reference Number for a quote.
* `UpdateContacts3` - Updates Client Contacts for a quote.
* `UpdateCustomField3` - Updates a custom field with a specified key in a quote.
* `UpdateExpectedDeliveryDate` - Updates Expected Delivery Date for a quote.
* `UpdateInternalNotes1` - Updates Internal Notes for a quote.
* `UpdatePayable3` - Updates a payable.
* `UpdateQuoteExpiry` - Updates Quote Expiry Date for a quote.
* `UpdateReceivable3` - Updates a receivable.
* `UpdateSourceLanguage1` - Updates source language for a quote.
* `UpdateSpecialization1` - Updates specialization for a quote.
* `UpdateTargetLanguages1` - Updates target languages for a quote.
* `UpdateVendorInstructions1` - Updates instructions for all vendors performing the jobs in a quote.
* `UpdateVolume1` - Updates volume for a quote.
* `UploadFile3` - Uploads file to the quote as a file uploaded by PM.

### Reports

* `Delete11` - Removes a report.
* `Duplicate1` - Duplicates a report.
* `ExportToXML` - Exports reports definition to XML.
* `GenerateCSV` - Generates CSV content for a report.
* `GeneratePrinterFriendly` - Generates printer friendly content for a report.
* `ImportFromXML` - Imports reports definition from XML.
* `SetPreferred` - Marks report as preferred or not.

### Subscription

* `AreHooksSupported` - This method can be used to determine if hooks are supported.
* `GetAll4` - Returns all subscriptions
* `Subscribe` - Subscribe to event
* `Unsubscribe` - Unsubscribe from event

### TasksClassic

* `AddFile` - Adds files to a given task.
* `Delete14` - Removes a task.
* `GetContacts1` - Returns contacts of a given task.
* `GetCustomFields7` - Returns custom fields of a given task.
* `GetDates3` - Returns dates of a given task.
* `GetInstructions2` - Returns instructions of a given task.
* `GetProgress` - Returns progress of a given task.
* `GetTaskFiles` - Returns lists of files of a given task.
* `Start1` - Starts a task.
* `UpdateClientTaskPONumber` - Updates Client Task PO Number of a given task.
* `UpdateContacts1` - Updates contacts of a given task.
* `UpdateCustomFields5` - Updates custom fields of a given task.
* `UpdateDates2` - Updates dates of a given task.
* `UpdateInstructions3` - Updates instructions of a given task.
* `UpdateName` - Updates name of a given task.

### Users

* `ChangePassword` - Sets user's password to a new value.
* `GetAllNamesWithIds1` - Returns list of simple users representations
* `GetByID6` - Returns user details.
* `GetCustomField1` - Returns custom field of a given user.
* `GetCustomFields4` - Returns custom fields of a given user.
* `GetMe` - Returns currently signed in user details.
* `GetTimeZone` - Returns time zone preferred by user currently signed in.
* `UpdateCustomField1` - Updates given custom field of a given user.
* `UpdateCustomFields2` - Updates custom fields of a given user.
* `Update3` - Updates an existing user.

### VendorInvoices

* `CreatePayment1` - Creates a new payment on the vendor account and assigns the payment to the invoice.
* `Create4` - Creates a new invoice.
* `Delete6` - Removes a provider invoice.
* `Delete7` - Removes a provider payment.
* `GetAllIds3` - Returns vendor invoices' internal identifiers.
* `GetAll2` - Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* `GetByID3` - Returns provider invoice details.
* `GetDocument1` - Generates provider invoice document (PDF).
* `GetPayments1` - Returns all payments for the vendor invoice.
* `Send` - Sends a provider invoice.
* `SetStatus` - Changes invoice status to given status.

### Vendors

* `Delete10` - Removes a provider.
* `Delete8` - Removes a person.
* `Delete9` - Removes a provider price list.
* `GetAddress1` - Returns address of a given provider.
* `GetAllIds4` - Returns persons' internal identifiers.
* `GetAllIds5` - Returns providers' internal identifiers.
* `GetByID4` - Returns person details.
* `GetByID5` - Returns provider details.
* `GetCompetencies` - Returns competencies of a given provider.
* `GetContact2` - Returns contact of a given person.
* `GetContact3` - Returns contact of a given provider.
* `GetCorrespondenceAddress1` - Returns correspondence address of a given provider.
* `GetCustomFields2` - Returns custom fields of a given person.
* `GetCustomFields3` - Returns custom fields of a given provider.
* `SendInvitations` - Sends invitation to Vendor Portal.
* `SendInvitations1` - Sends invitations to Vendor Portal.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
