# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/zuora.com/2021-08-20/go
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
    s := sdk.New()

    req := operations.DELETEAccountingCodeRequest{
        ZuoraEntityIds: "corrupti",
        ZuoraTrackID: "provident",
        AcID: "distinctio",
    }

    ctx := context.Background()
    res, err := s.AccountingCodes.DELETEAccountingCode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CommonResponseType != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AccountingCodes

* `DELETEAccountingCode` - Delete an accounting code
* `GETAccountingCode` - Retrieve an accounting code
* `GETAllAccountingCodes` - List all accounting codes
* `POSTAccountingCode` - Create an accounting code
* `PUTAccountingCode` - Update an accounting code
* `PUTActivateAccountingCode` - Activate an accounting code
* `PUTDeactivateAccountingCode` - Deactivate an accounting code

### AccountingPeriods

* `DELETEAccountingPeriod` - Delete an accounting period
* `GETAccountingPeriod` - Retrieve an accounting period
* `GETAllAccountingPeriods` - List all accounting periods
* `POSTAccountingPeriod` - Create an accounting period
* `PUTCloseAccountingPeriod` - Close an accounting period
* `PUTPendingCloseAccountingPeriod` - Set an accounting period to pending close
* `PUTReopenAccountingPeriod` - Reopen an accounting period
* `PUTRunTrialBalance` - Run trial balance
* `PUTUpdateAccountingPeriod` - Update an accounting period

### Accounts

* `GETAccount` - Retrieve an account
* `GETAccountSummary` - Retrieve an account summary
* `ObjectDELETEAccount` - CRUD: Delete an account
* `ObjectGETAccount` - CRUD: Retrieve an account
* `ObjectPOSTAccount` - CRUD: Create an account
* `ObjectPUTAccount` - CRUD: Update an account
* `POSTAccount` - Create an account
* `PUTAccount` - Update an account

### Actions

* `ActionPOSTamend` - Amend
* `ActionPOSTcreate` - Create
* `ActionPOSTdelete` - Delete
* `ActionPOSTexecute` - Execute
* `ActionPOSTgenerate` - Generate
* `ActionPOSTquery` - Query
* `ActionPOSTqueryMore` - QueryMore
* `ActionPOSTsubscribe` - Subscribe
* `ActionPOSTupdate` - Update

### Amendments

* `GETAmendmentsByKey` - Retrieve an amendment
* `GETAmendmentsBySubscriptionID` - List all amendments of a subscription
* `ObjectDELETEAmendment` - CRUD: Delete an amendment
* `ObjectGETAmendment` - CRUD: Retrieve an amendment
* `ObjectPUTAmendment` - CRUD: Update an amendment

### Attachments

* `DELETEAttachments` - Delete an attachment
* `GETAttachments` - Retrieve an attachment
* `GETAttachmentsList` - List attachments by object type and key
* `POSTAttachments` - Create an attachment
* `PUTAttachments` - Update an attachment

### BillRun

* `ObjectDELETEBillRun` - CRUD: Delete a bill run
* `ObjectGETBillRun` - CRUD: Retrieve a bill run
* `ObjectPOSTBillRun` - CRUD: Create a bill run
* `ObjectPUTBillRun` - CRUD: Post or cancel a bill run
* `POSTEmailBillingDocumentsfromBillRun` - Email billing documents generated from a bill run

### BillingDocuments

* `GETBillingDocumentFilesDeletionJob` - Retrieve a job of hard deleting billing document files
* `GETBillingDocuments` - List billing documents for an account
* `POSTBillingDocumentFilesDeletionJob` - Create a job to hard delete billing document files
* `POSTGenerateBillingDocuments` - Generate billing documents by account ID

### BillingPreviewRun

* `GETBillingPreviewRun` - Retrieve a billing preview run
* `POSTBillingPreviewRun` - Create a billing preview run

### Catalog

* `GETCatalog` - List all products
* `GETProduct` - Retrieve a product
* `POSTCatalog` - Multi-entity: Share a product with an entity

### ChargeMetrics

* `GETChargeMetrics` - List charge metrics by time range
* `GETChargeMetricsDiscountAllocationDetails` - List discount allocation details by time range

### ChargeRevenueSummaries

* `GETCRSByCRSNumber` - List all details of a charge revenue summary
* `GETCRSByChargeID` - Retrieve a charge revenue summary by charge ID

### CommunicationProfiles

* `ObjectGETCommunicationProfile` - CRUD: Retrieve a communication profile

### Connections

* `POSTConnections` - Establish a connection to Zuora REST API

### Contacts

* `ObjectDELETEContact` - CRUD: Delete a contact
* `ObjectGETContact` - CRUD: Retrieve a contact
* `ObjectPOSTContact` - CRUD: Create a contact
* `ObjectPUTContact` - CRUD: Update a contact
* `PUTScrubContact` - Scrub a contact

### CreditBalanceAdjustments

* `ObjectGETCreditBalanceAdjustment` - CRUD: Retrieve a credit balance adjustment
* `ObjectPOSTCreditBalanceAdjustment` - CRUD: Create a credit balance adjustment
* `ObjectPUTCreditBalanceAdjustment` - CRUD: Update a credit balance adjustment

### CreditMemos

* `DELETECreditMemo` - Delete a credit memo
* `GETCreditMemo` - Retrieve a credit memo
* `GETCreditMemoItem` - Retrieve a credit memo item
* `GETCreditMemoItemPart` - Retrieve a credit memo part item
* `GETCreditMemoItemParts` - List all credit memo part items
* `GETCreditMemoItems` - List credit memo items
* `GETCreditMemoPart` - Retrieve a credit memo part
* `GETCreditMemoParts` - List all parts of a credit memo
* `GETCreditMemos` - List credit memos
* `GETTaxationItemsOfCreditMemoItem` - List all taxation items of a credit memo item
* `POSTCMTaxationItems` - Create taxation items for a credit memo
* `POSTCreditMemoFromPrpc` - Create a credit memo from a charge
* `POSTCreditMemoPDF` - Generate a credit memo PDF file
* `POSTEmailCreditMemo` - Email a credit memo
* `POSTRefundCreditMemo` - Refund a credit memo
* `POSTUploadFileForCreditMemo` - Upload a file for a credit memo
* `PUTApplyCreditMemo` - Apply a credit memo
* `PUTCancelCreditMemo` - Cancel a credit memo
* `PUTPostCreditMemo` - Post a credit memo
* `PUTUnapplyCreditMemo` - Unapply a credit memo
* `PUTUnpostCreditMemo` - Unpost a credit memo
* `PUTUpdateCreditMemo` - Update a credit memo

### CustomExchangeRates

* `GETCustomExchangeRates` - List custom exchange rates by currency

### CustomObjectDefinitions

* `DeleteCustomObjectDefinitionByType` - Delete a custom object definition
* `GETAllCustomObjectDefinitionsInNamespace` - List custom object definitions
* `GETCustomObjectDefinitionByType` - Retrieve a custom object definition
* `POSTCustomObjectDefinitions` - Create custom object definitions
* `POSTUpdateCustomObjectDefinition` - Update a custom object definition

### CustomObjectJobs

* `GETAllCustomObjectBulkJobs` - List all custom object bulk jobs
* `GETCustomObjectBulkJob` - Retrieve a custom object bulk job
* `GETCustomObjectBulkJobErrors` - List all errors for a custom object bulk job
* `POSTCustomObjectBulkJob` - Submit a custom object bulk job
* `POSTUploadFileForCustomObjectBulkJob` - Upload a file for a custom object bulk job

### CustomObjectRecords

* `DeleteCustomObjectRecordByID` - Delete a custom object record
* `GETAllRecordsForCustomObjectType` - List records for a custom object
* `GETCustomObjectRecordByID` - Retrieve a custom object record
* `POSTCustomObjectRecords` - Create custom object records
* `POSTCustomObjectRecordsBatchUpdateOrDelete` - Update or delete custom object records
* `PUTCustomObjectRecord` - Update a custom object record
* `PatchPartialUpdateCustomObjectRecord` - Partially update a custom object record

### DataQueries

* `DELETEDataQueryJob` - Cancel a data query job
* `GETDataQueryJob` - Retrieve a data query job
* `GETDataQueryJobs` - List data query jobs
* `POSTDataQueryJob` - Submit a data query

### DebitMemos

* `DELETEDebitMemo` - Delete a debit memo
* `GETDebitMemo` - Retrieve a debit memo
* `GETDebitMemoApplicationParts` - List all application parts of a debit memo
* `GETDebitMemoItem` - Retrieve a debit memo item
* `GETDebitMemoItems` - List debit memo items
* `GETDebitMemos` - List debit memos
* `GETTaxationItemsOfDebitMemoItem` - List all taxation items of a debit memo item
* `POSTDMTaxationItems` - Create taxation items for a debit memo
* `POSTDebitMemoCollect` - Collect a posted debit memo
* `POSTDebitMemoFromPrpc` - Create a debit memo from a charge
* `POSTDebitMemoPDF` - Generate a debit memo PDF file
* `POSTEmailDebitMemo` - Email a debit memo
* `POSTUploadFileForDebitMemo` - Upload a file for a debit memo
* `PUTBatchUpdateDebitMemos` - Update debit memos
* `PUTCancelDebitMemo` - Cancel a debit memo
* `PUTDebitMemo` - Update a debit memo
* `PUTPostDebitMemo` - Post a debit memo
* `PUTUnpostDebitMemo` - Unpost a debit memo

### Describe

* `GETDescribe` - Describe an object

### DocumentProperties

* `DELETEDocumentProperties` - Delete document properties
* `GETDocumentProperies` - List all properties of a billing document
* `POSTDocumentProperties` - Create document properties
* `PUTDocumentProperties` - Update document properties

### Entities

* `DELETEEntities` - Multi-entity: Delete an entity
* `GETEntities` - Multi-entity: List entities
* `GETEntityByID` - Multi-entity: Retrieve an entity
* `POSTEntities` - Multi-entity: Create an entity
* `PUTEntities` - Multi-entity: Update an entity
* `PUTProvisionEntity` - Multi-entity: Provision an entity

### EntityConnections

* `GETEntityConnections` - Multi-entity: List connections
* `POSTEntityConnections` - Multi-entity: Initiate a connection request
* `PUTEntityConnectionsAccept` - Multi-entity: Accept a connection request
* `PUTEntityConnectionsDeny` - Multi-entity: Deny a connection request
* `PUTEntityConnectionsDisconnect` - Multi-entity: Disconnect a connection

### EventTriggers

* `DELETEEventTrigger` - Delete an event trigger
* `GETEventTrigger` - Retrieve an event trigger
* `GETEventTriggers` - List event triggers
* `POSTEventTrigger` - Create an event trigger
* `PUTEventTrigger` - Update an event trigger

### Exports

* `ObjectGETExport` - CRUD: Retrieve an export
* `ObjectPOSTExport` - CRUD: Create an export

### Features

* `ObjectDELETEFeature` - CRUD: Delete a feature
* `ObjectGETFeature` - CRUD: Retrieve a feature
* `ObjectPOSTFeature` - CRUD: Create a feature
* `ObjectPUTFeature` - CRUD: Update a feature

### Files

* `GETFiles` - Retrieve a file

### HMACSignatures

* `POSTHMACSignatures` - Generate an HMAC signature

### HostedPages

* `GetHostedPages` - List hosted pages

### Imports

* `ObjectGETImport` - CRUD: Retrieve an import
* `ObjectPOSTImport` - CRUD: Create an import

### InvoiceAdjustments

* `ObjectDELETEInvoiceAdjustment` - CRUD: Delete an invoice adjustment
* `ObjectGETInvoiceAdjustment` - CRUD: Retrieve an invoice adjustment
* `ObjectPOSTInvoiceAdjustment` - CRUD: Create an invoice adjustment
* `ObjectPUTInvoiceAdjustment` - CRUD: Update an invoice adjustment

### InvoiceItemAdjustments

* `ObjectDELETEInvoiceItemAdjustment` - CRUD: Delete an invoice item adjustment
* `ObjectGETInvoiceItemAdjustment` - CRUD: Retrieve an invoice item adjustment

### InvoiceItems

* `ObjectGETInvoiceItem` - CRUD: Retrieve an invoice item

### InvoicePayments

* `ObjectGETInvoicePayment` - CRUD: Retrieve an invoice payment
* `ObjectPOSTInvoicePayment` - CRUD: Create an invoice payment
* `ObjectPUTInvoicePayment` - CRUD: Update an invoice payment

### InvoiceSplitItems

* `ObjectGETInvoiceSplitItem` - CRUD: Retrieve an invoice split item

### InvoiceSplits

* `ObjectGETInvoiceSplit` - CRUD: Retrieve an invoice split

### Invoices

* `GETInvoiceApplicationParts` - List all application parts of an invoice
* `GETInvoiceFiles` - List all files of an invoice
* `GETInvoiceItems` - List all items of an invoice
* `GETTaxationItemsOfInvoiceItem` - List all taxation items of an invoice item
* `ObjectDELETEInvoice` - CRUD: Delete an invoice
* `ObjectGETInvoice` - CRUD: Retrieve an invoice
* `ObjectPUTInvoice` - CRUD: Update an invoice
* `POSTCreditMemoFromInvoice` - Create a credit memo from an invoice
* `POSTDebitMemoFromInvoice` - Create a debit memo from an invoice
* `POSTEmailInvoice` - Email an invoice
* `POSTStandaloneInvoice` - Create a standalone invoice
* `POSTUploadFileForInvoice` - Upload a file for an invoice
* `PUTBatchUpdateInvoices` - Update invoices
* `PUTReverseInvoice` - Reverse an invoice
* `PUTUpdateInvoice` - Update an invoice
* `PUTWriteOffInvoice` - Write off an invoice

### JournalRuns

* `DELETEJournalRun` - Delete a journal run
* `GETJournalRun` - Retrieve a journal run
* `POSTJournalRun` - Create a journal run
* `PUTJournalRun` - Cancel a journal run

### MassUpdater

* `GETMassUpdater` - List all results of a mass action
* `POSTMassUpdater` - Perform a mass action
* `PUTMassUpdater` - Stop a mass action

### Notifications

* `DELETEDELETEEmailTemplate` - Delete an email template
* `DELETEDELETENotificationDefinition` - Delete a notification definition
* `DELETEDELETENotificationHistoryForAccount` - Delete notification histories for an account
* `GETCalloutHistory` - List callout notification histories
* `GETEmailHistory` - List email notification histories
* `GETGETEmailTemplate` - Retrieve an email template
* `GETGETNotificationDefinition` - Retrieve a notification definition
* `GETGETNotificationHistoryDeletionTask` - Retrieve a notification history deletion task
* `GETQueryEmailTemplates` - List email templates
* `GETQueryNotificationDefinitions` - List notification definitions
* `POSTCreateEmailTemplate` - Create an email template
* `POSTCreateNotificationDefinition` - Create a notification definition
* `PUTUpdateEmailTemplate` - Update an email template
* `PUTUpdateNotificationDefinition` - Update a notification definition

### OAuth

* `CreateToken` - Create an OAuth token

### Operations

* `POSTBillingPreview` - Generate a billing preview
* `POSTTransactionInvoicePayment` - Invoice and collect

### OrderLineItems

* `GETOrderLineItem` - Retrieve an order line item
* `PUTOrderLineItem` - Update an order line item
* `PostOrderLineItems` - Update order line items

### Orders

* `DELETEOrder` - Delete an order
* `GETAllOrders` - List orders
* `GETJobStatusAndResponse` - Retrieve the status and response of a job
* `GETOrder` - Retrieve an order
* `GETOrderMetricsforEvergreenSubscription` - List order metrics for an evergreen subscription
* `GETOrdersByInvoiceOwner` - List orders of an invoice owner
* `GETOrdersBySubscriptionNumber` - List orders by subscription number
* `GETOrdersBySubscriptionOwner` - List orders of a subscription owner
* `GETSubscriptionTermInfo` - List subscription terms
* `POSTCreateOrderAsynchronously` - Create an order asynchronously
* `POSTOrder` - Create an order
* `POSTPreviewOrder` - Preview an order
* `POSTPreviewOrderAsynchronously` - Preview an order asynchronously
* `PUTOrderTriggerDates` - Update order action trigger dates
* `PUTUpdateOrderCustomFields` - Update order custom fields
* `PUTUpdateSubscriptionCustomFields` - Update subscription custom fields

### PaymentGatewayReconciliation

* `POSTReconcileRefund` - Reconcile a refund
* `POSTRejectPayment` - Reject a payment
* `POSTReversePayment` - Reverse a payment
* `POSTSettlePayment` - Settle a payment

### PaymentGateways

* `GETPaymentgateways` - List all payment gateways

### PaymentMethodSnapshots

* `ObjectGETPaymentMethodSnapshot` - CRUD: Retrieve a payment method snapshot

### PaymentMethodTransactionLogs

* `ObjectGETPaymentMethodTransactionLog` - CRUD: Retrieve a payment method transaction log

### PaymentMethods

* `DELETEPaymentMethods` - Delete a payment method
* `GETPaymentMethod` - Retrieve a payment method
* `GETPaymentMethodsCreditCard` - List all credit card payment methods of an account
* `GETStoredCredentialProfiles` - List stored credential profiles of a payment method
* `ObjectDELETEPaymentMethod` - CRUD: Delete a payment method
* `ObjectGETPaymentMethod` - CRUD: Retrieve a payment method
* `ObjectPOSTPaymentMethod` - CRUD: Create a payment method
* `ObjectPUTPaymentMethod` - CRUD: Update a payment method
* `POSTCancelAuthorization` - Cancel authorization
* `POSTCancelStoredCredentialProfile` - Cancel a stored credential profile
* `POSTCreateAuthorization` - Create authorization
* `POSTCreateStoredCredentialProfile` - Create a stored credential profile
* `POSTExpireStoredCredentialProfile` - Expire a stored credential profile
* `POSTPaymentMethods` - Create a payment method
* `POSTPaymentMethodsCreditCard` - Create a credit card payment method
* `POSTPaymentMethodsDecryption` - Create an Apple Pay payment method
* `PUTPaymentMethod` - Update a payment method
* `PUTPaymentMethodsCreditCard` - Update a credit card payment method
* `PUTScrubPaymentMethods` - Scrub a payment method
* `PUTVerifyPaymentMethods` - Verify a payment method

### PaymentRuns

* `DELETEPaymentRun` - Delete a payment run
* `GETPaymentRun` - Retrieve a payment run
* `GETPaymentRunData` - Retrieve payment run data
* `GETPaymentRunSummary` - Retrieve a payment run summary
* `GETPaymentRuns` - List payment runs
* `POSTPaymentRun` - Create a payment run
* `PUTPaymentRun` - Update a payment run

### PaymentTransactionLogs

* `ObjectGETPaymentTransactionLog` - CRUD: Retrieve a payment transaction log

### Payments

* `DELETEPayment` - Delete a payment
* `GETPayment` - Retrieve a payment
* `GETPaymentItemPart` - Retrieve a payment part item
* `GETPaymentItemParts` - List all payment part items
* `GETPaymentPart` - Retrieve a payment part
* `GETPaymentParts` - List all parts of a payment
* `GETRetrieveAllPayments` - List payments
* `ObjectDELETEPayment` - CRUD: Delete a payment
* `ObjectGETPayment` - CRUD: Retrieve a payment
* `ObjectPOSTPayment` - CRUD: Create a payment
* `ObjectPUTPayment` - CRUD: Update a payment
* `POSTCreatePayment` - Create a payment
* `POSTRefundPayment` - Refund a payment
* `PUTApplyPayment` - Apply a payment
* `PUTCancelPayment` - Cancel a payment
* `PUTTransferPayment` - Transfer a payment
* `PUTUnapplyPayment` - Unapply a payment
* `PUTUpdatePayment` - Update a payment

### ProductFeatures

* `ObjectDELETEProductFeature` - CRUD: Delete a product feature
* `ObjectGETProductFeature` - CRUD: Retrieve a product feature

### ProductRatePlanChargeTiers

* `ObjectGETProductRatePlanChargeTier` - CRUD: Retrieve a product rate plan charge tier
* `ObjectPUTProductRatePlanChargeTier` - CRUD: Update a product rate plan charge tier

### ProductRatePlanCharges

* `ObjectDELETEProductRatePlanCharge` - CRUD: Delete a product rate plan charge
* `ObjectGETProductRatePlanCharge` - CRUD: Retrieve a product rate plan charge
* `ObjectPOSTProductRatePlanCharge` - CRUD: Create a product rate plan charge
* `ObjectPUTProductRatePlanCharge` - CRUD: Update a product rate plan charge

### ProductRatePlans

* `GETProductRatePlans` - List all product rate plans of a product
* `ObjectDELETEProductRatePlan` - CRUD: Delete a product rate plan
* `ObjectGETProductRatePlan` - CRUD: Retrieve a product rate plan
* `ObjectPOSTProductRatePlan` - CRUD: Create a product rate plan
* `ObjectPUTProductRatePlan` - CRUD: Update a product rate plan

### Products

* `ObjectDELETEProduct` - CRUD: Delete a product
* `ObjectGETProduct` - CRUD: Retrieve a product
* `ObjectPOSTProduct` - CRUD: Create a product
* `ObjectPUTProduct` - CRUD: Update a product

### QuotesDocument

* `POSTQuotesDocument` - Generate a quote document

### RSASignatures

* `POSTDecryptRSASignatures` - Decrypt an RSA signature
* `POSTRSASignatures` - Generate an RSA signature

### Ramps

* `GETRampByRampNumber` - Retrieve a ramp
* `GETRampMetricsByOrderNumber` - List ramp metrics by order number
* `GETRampMetricsByRampNumber` - List all ramp metrics of a ramp
* `GETRampMetricsBySubscriptionKey` - List ramp metrics by subscription key
* `GETRampsBySubscriptionKey` - Retrieve a ramp by subscription key

### RatePlanChargeTiers

* `ObjectGETRatePlanChargeTier` - CRUD: Retrieve a rate plan charge tier

### RatePlanCharges

* `ObjectGETRatePlanCharge` - CRUD: Retrieve a rate plan charge
* `ObjectPUTRatePlanCharge` - CRUD: Update a rate plan charge

### RatePlans

* `ObjectGETRatePlan` - CRUD: Retrieve a rate plan

### RefundInvoicePayments

* `ObjectGETRefundInvoicePayment` - CRUD: Retrieve a refund invoice payment

### RefundTransactionLogs

* `ObjectGETRefundTransactionLog` - CRUD: Retrieve a refund transaction log

### Refunds

* `DELETERefund` - Delete a refund
* `GETRefund` - Retrieve a refund
* `GETRefundItemPart` - Retrieve a refund part item
* `GETRefundItemParts` - List all refund part items
* `GETRefundPart` - Retrieve a refund part
* `GETRefundParts` - List all parts of a refund
* `GETRefunds` - List refunds
* `ObjectDELETERefund` - CRUD: Delete a refund
* `ObjectGETRefund` - CRUD: Retrieve a refund
* `ObjectPOSTRefund` - CRUD: Create a refund
* `ObjectPUTRefund` - CRUD: Update a refund
* `PUTCancelRefund` - Cancel a refund
* `PUTUpdateRefund` - Update a refund

### RevenueEvents

* `GETRevenueEventDetails` - Retrieve a revenue event
* `GETRevenueEventForRevenueSchedule` - List all revenue events of a revenue schedule

### RevenueItems

* `GETRevenueItemsByChargeRevenueEventNumber` - List revenue items by revenue event number
* `GETRevenueItemsByChargeRevenueSummaryNumber` - List revenue items by charge revenue summary number
* `GETRevenueItemsByRevenueSchedule` - List all revenue items of a revenue schedule
* `PUTCustomFieldsonRevenueItemsByRevenueEvent` - Update custom fields on revenue items by revenue event number
* `PUTCustomFieldsonRevenueItemsByRevenueSchedule` - Update custom fields on revenue items by revenue schedule number

### RevenueRules

* `GETRevenueAutomationStartDate` - Retrieve a revenue automation start date
* `GETRevenueRecRulebyProductRatePlanCharge` - Retrieve a revenue recognition rule by product rate plan charge ID
* `GETRevenueRecRules` - Retrieve a revenue recognition rule by subscription charge ID

### RevenueSchedules

* `DeleteRs` - Delete a revenue schedule
* `GetRs` - List all details of a revenue schedule
* `GETRSbyCreditMemoItem` - Retrieve a revenue schedule by credit memo item ID

* `GETRSbyDebitMemoItem` - Retrieve a revenue schedule by debit memo item ID

* `GETRSbyInvoiceItem` - Retrieve a revenue schedule by invoice item ID
* `GETRSbyInvoiceItemAdjustment` - Retrieve a revenue schedule by invoice item adjustment key
* `GETRSbyProductChargeAndBillingAccount` - List revenue schedules of a product charge by charge ID and account key

* `GETRSforSubscCharge` - List revenue schedules by subscription charge key
* `POSTRSforCreditMemoItemDistributeByDateRange` - Create a revenue schedule for a credit memo item (distribute by date range)

* `POSTRSforCreditMemoItemManualDistribution` - Create a revenue schedule for a credit memo item (manual distribution)

* `POSTRSforDebitMemoItemDistributeByDateRange` - Create a revenue schedule for a debit memo item (distribute by date range)

* `POSTRSforDebitMemoItemManualDistribution` - Create a revenue schedule for a debit memo item (distribute by date range)

* `POSTRSforInvoiceItemAdjustmentDistributeByDateRange` - Create a revenue schedule for an invoice item adjustment (distribute by date range)
* `POSTRSforInvoiceItemAdjustmentManualDistribution` - Create a revenue schedule for an invoice item adjustment (manual distribution)
* `POSTRSforInvoiceItemDistributeByDateRange` - Create a revenue schedule for an invoice item (distribute by date range)
* `POSTRSforInvoiceItemManualDistribution` - Create a revenue schedule for an invoice item (manual distribution)
* `POSTRSforSubscCharge` - Create a revenue schedule by subscription charge key
* `PUTRSBasicInfo` - Update a revenue schedule
* `PUTRevenueAcrossAP` - Distribute revenue across accounting periods
* `PUTRevenueByRecognitionStartandEndDates` - Distribute revenue in a recognition period
* `PUTRevenueSpecificDate` - Distribute revenue on a specific date

### SequenceSets

* `DELETESequenceSet` - Delete a sequence set
* `GETSequenceSet` - Retrieve a sequence set
* `GETSequenceSets` - List sequence sets
* `POSTSequenceSets` - Create sequence sets
* `PUTSequenceSet` - Update a sequence set

### Settings

* `GETListAllSettings` - List all settings
* `POSTProcessSettingsBatchRequest` - Submit settings requests

### SubscriptionProductFeatures

* `ObjectGETSubscriptionProductFeature` - CRUD: Retrieve a subscription product feature

### Subscriptions

* `GETSubscriptionsByAccount` - List subscriptions by account key
* `GETSubscriptionsByKey` - Retrieve a subscription by key
* `GETSubscriptionsByKeyAndVersion` - Retrieve a subscription by key and version
* `ObjectDELETESubscription` - CRUD: Delete a subscription
* `ObjectGETSubscription` - CRUD: Retrieve a subscription
* `ObjectPUTSubscription` - CRUD: Update a subscription
* `POSTPreviewSubscription` - Preview a subscription
* `POSTSubscription` - Create a subscription
* `PUTCancelSubscription` - Cancel a subscription
* `PUTRenewSubscription` - Renew a subscription
* `PUTResumeSubscription` - Resume a subscription
* `PUTSubscription` - Update a subscription
* `PUTSuspendSubscription` - Suspend a subscription
* `PUTUpdateSubscriptionCustomFieldsOfASpecifiedVersion` - Update subscription custom fields of a subscription version

### SummaryJournalEntries

* `DELETESummaryJournalEntry` - Delete a summary journal entry
* `GETAllSummaryJournalEntries` - List all summary journal entries in a journal run
* `GETSummaryJournalEntry` - Retrieve a summary journal entry
* `POSTSummaryJournalEntry` - Create a summary journal entry
* `PUTBasicSummaryJournalEntry` - Update a summary journal entry
* `PUTSummaryJournalEntry` - Cancel a summary journal entry

### TaxationItems

* `DELETETaxationItem` - Delete a taxation item
* `GETTaxationItem` - Retrieve a taxation item

* `ObjectDELETETaxationItem` - CRUD: Delete a taxation item
* `ObjectGETTaxationItem` - CRUD: Retrieve a taxation item
* `ObjectPOSTTaxationItem` - CRUD: Create a taxation item
* `ObjectPUTTaxationItem` - CRUD: Update a taxation item
* `PUTTaxationItem` - Update a taxation item

### Transactions

* `GETTransactionInvoice` - List all invoices for an account
* `GETTransactionPayment` - List all payments for an account

### UnitOfMeasure

* `ObjectDELETEUnitOfMeasure` - CRUD: Delete a unit of measure
* `ObjectGETUnitOfMeasure` - CRUD: Retrieve a unit of measure
* `ObjectPOSTUnitOfMeasure` - CRUD: Create a unit of measure
* `ObjectPUTUnitOfMeasure` - CRUD: Update a unit of measure

### Usage

* `GETUsage` - Retrieve a usage record
* `ObjectDELETEUsage` - CRUD: Delete a usage record
* `ObjectGETUsage` - CRUD: Retrieve a usage record
* `ObjectPOSTUsage` - CRUD: Create a usage record
* `ObjectPUTUsage` - CRUD: Update a usage record
* `POSTUsage` - Upload a usage file

### Users

* `GETEntitiesUserAccessible` - Multi-entity: List all entities that a user can access
* `PUTAcceptUserAccess` - Multi-entity: Accept user access
* `PUTDenyUserAccess` - Multi-entity: Deny user access
* `PUTSendUserAccessRequests` - Multi-entity: Send user access requests

### Workflows

* `DELETEWorkflow` - Delete a workflow
* `GETWorkflow` - Retrieve a workflow
* `GETWorkflowExport` - Export a workflow
* `GETWorkflows` - List workflows
* `GETWorkflowsTask` - Retrieve a workflow task
* `GETWorkflowsTasks` - List workflow tasks
* `GETWorkflowsUsages` - Retrieve workflow task usage
* `PATCHUpdateWorkflow` - Update a workflow definition
* `POSTRunWorkflow` - Run a workflow
* `POSTWorkflowImport` - Import a workflow
* `POSTWorkflowsTaskRerun` - Rerun a workflow task
* `PUTWorkflowsTasksUpdate` - Update workflow tasks

### ZuoraRevenueIntegration

* `PUTRevProAccountingCodes` - Update a Zuora Revenue accounting code
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
