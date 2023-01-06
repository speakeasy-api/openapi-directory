# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DeleteAccountingCodeRequest{
        PathParams: operations.DeleteAccountingCodePathParams{
            AcID: "sed",
        },
        Headers: operations.DeleteAccountingCodeHeaders{
            ZuoraEntityIds: "ipsa",
            ZuoraTrackID: "facere",
        },
    }
    
    res, err := s.AccountingCodes.DeleteAccountingCode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CommonResponseType != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Accounting Codes

* `DeleteAccountingCode` - Delete an accounting code
* `GetAccountingCode` - Retrieve an accounting code
* `GetAllAccountingCodes` - List all accounting codes
* `PostAccountingCode` - Create an accounting code
* `PutAccountingCode` - Update an accounting code
* `PutActivateAccountingCode` - Activate an accounting code
* `PutDeactivateAccountingCode` - Deactivate an accounting code

### Accounting Periods

* `DeleteAccountingPeriod` - Delete an accounting period
* `GetAccountingPeriod` - Retrieve an accounting period
* `GetAllAccountingPeriods` - List all accounting periods
* `PostAccountingPeriod` - Create an accounting period
* `PutCloseAccountingPeriod` - Close an accounting period
* `PutPendingCloseAccountingPeriod` - Set an accounting period to pending close
* `PutReopenAccountingPeriod` - Reopen an accounting period
* `PutRunTrialBalance` - Run trial balance
* `PutUpdateAccountingPeriod` - Update an accounting period

### Accounts

* `GetAccount` - Retrieve an account
* `GetAccountSummary` - Retrieve an account summary
* `ObjectDeleteAccount` - CRUD: Delete an account
* `ObjectGetAccount` - CRUD: Retrieve an account
* `ObjectPostAccount` - CRUD: Create an account
* `ObjectPutAccount` - CRUD: Update an account
* `PostAccount` - Create an account
* `PutAccount` - Update an account

### Actions

* `ActionPosTamend` - Amend
* `ActionPosTcreate` - Create
* `ActionPosTdelete` - Delete
* `ActionPosTexecute` - Execute
* `ActionPosTgenerate` - Generate
* `ActionPosTquery` - Query
* `ActionPosTqueryMore` - QueryMore
* `ActionPosTsubscribe` - Subscribe
* `ActionPosTupdate` - Update

### Amendments

* `GetAmendmentsByKey` - Retrieve an amendment
* `GetAmendmentsBySubscriptionID` - List all amendments of a subscription
* `ObjectDeleteAmendment` - CRUD: Delete an amendment
* `ObjectGetAmendment` - CRUD: Retrieve an amendment
* `ObjectPutAmendment` - CRUD: Update an amendment

### Attachments

* `DeleteAttachments` - Delete an attachment
* `GetAttachments` - Retrieve an attachment
* `GetAttachmentsList` - List attachments by object type and key
* `PostAttachments` - Create an attachment
* `PutAttachments` - Update an attachment

### Bill Run

* `ObjectDeleteBillRun` - CRUD: Delete a bill run
* `ObjectGetBillRun` - CRUD: Retrieve a bill run
* `ObjectPostBillRun` - CRUD: Create a bill run
* `ObjectPutBillRun` - CRUD: Post or cancel a bill run
* `PostEmailBillingDocumentsfromBillRun` - Email billing documents generated from a bill run

### Billing Documents

* `GetBillingDocumentFilesDeletionJob` - Retrieve a job of hard deleting billing document files
* `GetBillingDocuments` - List billing documents for an account
* `PostBillingDocumentFilesDeletionJob` - Create a job to hard delete billing document files
* `PostGenerateBillingDocuments` - Generate billing documents by account ID

### Billing Preview Run

* `GetBillingPreviewRun` - Retrieve a billing preview run
* `PostBillingPreviewRun` - Create a billing preview run

### Catalog

* `GetCatalog` - List all products
* `GetProduct` - Retrieve a product
* `PostCatalog` - Multi-entity: Share a product with an entity

### Charge Metrics

* `GetChargeMetrics` - List charge metrics by time range
* `GetChargeMetricsDiscountAllocationDetails` - List discount allocation details by time range

### Charge Revenue Summaries

* `GetCrsByCrsNumber` - List all details of a charge revenue summary
* `GetCrsByChargeID` - Retrieve a charge revenue summary by charge ID

### Communication Profiles

* `ObjectGetCommunicationProfile` - CRUD: Retrieve a communication profile

### Connections

* `PostConnections` - Establish a connection to Zuora REST API

### Contacts

* `ObjectDeleteContact` - CRUD: Delete a contact
* `ObjectGetContact` - CRUD: Retrieve a contact
* `ObjectPostContact` - CRUD: Create a contact
* `ObjectPutContact` - CRUD: Update a contact
* `PutScrubContact` - Scrub a contact

### Credit Balance Adjustments

* `ObjectGetCreditBalanceAdjustment` - CRUD: Retrieve a credit balance adjustment
* `ObjectPostCreditBalanceAdjustment` - CRUD: Create a credit balance adjustment
* `ObjectPutCreditBalanceAdjustment` - CRUD: Update a credit balance adjustment

### Credit Memos

* `DeleteCreditMemo` - Delete a credit memo
* `GetCreditMemo` - Retrieve a credit memo
* `GetCreditMemoItem` - Retrieve a credit memo item
* `GetCreditMemoItemPart` - Retrieve a credit memo part item
* `GetCreditMemoItemParts` - List all credit memo part items
* `GetCreditMemoItems` - List credit memo items
* `GetCreditMemoPart` - Retrieve a credit memo part
* `GetCreditMemoParts` - List all parts of a credit memo
* `GetCreditMemos` - List credit memos
* `GetTaxationItemsOfCreditMemoItem` - List all taxation items of a credit memo item
* `PostCmTaxationItems` - Create taxation items for a credit memo
* `PostCreditMemoFromPrpc` - Create a credit memo from a charge
* `PostCreditMemoPdf` - Generate a credit memo PDF file
* `PostEmailCreditMemo` - Email a credit memo
* `PostRefundCreditMemo` - Refund a credit memo
* `PostUploadFileForCreditMemo` - Upload a file for a credit memo
* `PutApplyCreditMemo` - Apply a credit memo
* `PutCancelCreditMemo` - Cancel a credit memo
* `PutPostCreditMemo` - Post a credit memo
* `PutUnapplyCreditMemo` - Unapply a credit memo
* `PutUnpostCreditMemo` - Unpost a credit memo
* `PutUpdateCreditMemo` - Update a credit memo

### Custom Exchange Rates

* `GetCustomExchangeRates` - List custom exchange rates by currency

### Custom Object Definitions

* `DeleteCustomObjectDefinitionByType` - Delete a custom object definition
* `GetAllCustomObjectDefinitionsInNamespace` - List custom object definitions
* `GetCustomObjectDefinitionByType` - Retrieve a custom object definition
* `PostCustomObjectDefinitions` - Create custom object definitions
* `PostUpdateCustomObjectDefinition` - Update a custom object definition

### Custom Object Jobs

* `GetAllCustomObjectBulkJobs` - List all custom object bulk jobs
* `GetCustomObjectBulkJob` - Retrieve a custom object bulk job
* `GetCustomObjectBulkJobErrors` - List all errors for a custom object bulk job
* `PostCustomObjectBulkJob` - Submit a custom object bulk job
* `PostUploadFileForCustomObjectBulkJob` - Upload a file for a custom object bulk job

### Custom Object Records

* `DeleteCustomObjectRecordByID` - Delete a custom object record
* `GetAllRecordsForCustomObjectType` - List records for a custom object
* `GetCustomObjectRecordByID` - Retrieve a custom object record
* `PostCustomObjectRecords` - Create custom object records
* `PostCustomObjectRecordsBatchUpdateOrDelete` - Update or delete custom object records
* `PutCustomObjectRecord` - Update a custom object record
* `PatchPartialUpdateCustomObjectRecord` - Partially update a custom object record

### Data Queries

* `DeleteDataQueryJob` - Cancel a data query job
* `GetDataQueryJob` - Retrieve a data query job
* `GetDataQueryJobs` - List data query jobs
* `PostDataQueryJob` - Submit a data query

### Debit Memos

* `DeleteDebitMemo` - Delete a debit memo
* `GetDebitMemo` - Retrieve a debit memo
* `GetDebitMemoApplicationParts` - List all application parts of a debit memo
* `GetDebitMemoItem` - Retrieve a debit memo item
* `GetDebitMemoItems` - List debit memo items
* `GetDebitMemos` - List debit memos
* `GetTaxationItemsOfDebitMemoItem` - List all taxation items of a debit memo item
* `PostDmTaxationItems` - Create taxation items for a debit memo
* `PostDebitMemoCollect` - Collect a posted debit memo
* `PostDebitMemoFromPrpc` - Create a debit memo from a charge
* `PostDebitMemoPdf` - Generate a debit memo PDF file
* `PostEmailDebitMemo` - Email a debit memo
* `PostUploadFileForDebitMemo` - Upload a file for a debit memo
* `PutBatchUpdateDebitMemos` - Update debit memos
* `PutCancelDebitMemo` - Cancel a debit memo
* `PutDebitMemo` - Update a debit memo
* `PutPostDebitMemo` - Post a debit memo
* `PutUnpostDebitMemo` - Unpost a debit memo

### Describe

* `GetDescribe` - Describe an object

### Document Properties

* `DeleteDocumentProperties` - Delete document properties
* `GetDocumentProperies` - List all properties of a billing document
* `PostDocumentProperties` - Create document properties
* `PutDocumentProperties` - Update document properties

### Entities

* `DeleteEntities` - Multi-entity: Delete an entity
* `GetEntities` - Multi-entity: List entities
* `GetEntityByID` - Multi-entity: Retrieve an entity
* `PostEntities` - Multi-entity: Create an entity
* `PutEntities` - Multi-entity: Update an entity
* `PutProvisionEntity` - Multi-entity: Provision an entity

### Entity Connections

* `GetEntityConnections` - Multi-entity: List connections
* `PostEntityConnections` - Multi-entity: Initiate a connection request
* `PutEntityConnectionsAccept` - Multi-entity: Accept a connection request
* `PutEntityConnectionsDeny` - Multi-entity: Deny a connection request
* `PutEntityConnectionsDisconnect` - Multi-entity: Disconnect a connection

### Event Triggers

* `DeleteEventTrigger` - Delete an event trigger
* `GetEventTrigger` - Retrieve an event trigger
* `GetEventTriggers` - List event triggers
* `PostEventTrigger` - Create an event trigger
* `PutEventTrigger` - Update an event trigger

### Exports

* `ObjectGetExport` - CRUD: Retrieve an export
* `ObjectPostExport` - CRUD: Create an export

### Features

* `ObjectDeleteFeature` - CRUD: Delete a feature
* `ObjectGetFeature` - CRUD: Retrieve a feature
* `ObjectPostFeature` - CRUD: Create a feature
* `ObjectPutFeature` - CRUD: Update a feature

### Files

* `GetFiles` - Retrieve a file

### HMAC Signatures

* `PostHmacSignatures` - Generate an HMAC signature

### Hosted Pages

* `GetHostedPages` - List hosted pages

### Imports

* `ObjectGetImport` - CRUD: Retrieve an import
* `ObjectPostImport` - CRUD: Create an import

### Invoice Adjustments

* `ObjectDeleteInvoiceAdjustment` - CRUD: Delete an invoice adjustment
* `ObjectGetInvoiceAdjustment` - CRUD: Retrieve an invoice adjustment
* `ObjectPostInvoiceAdjustment` - CRUD: Create an invoice adjustment
* `ObjectPutInvoiceAdjustment` - CRUD: Update an invoice adjustment

### Invoice Item Adjustments

* `ObjectDeleteInvoiceItemAdjustment` - CRUD: Delete an invoice item adjustment
* `ObjectGetInvoiceItemAdjustment` - CRUD: Retrieve an invoice item adjustment

### Invoice Items

* `ObjectGetInvoiceItem` - CRUD: Retrieve an invoice item

### Invoice Payments

* `ObjectGetInvoicePayment` - CRUD: Retrieve an invoice payment
* `ObjectPostInvoicePayment` - CRUD: Create an invoice payment
* `ObjectPutInvoicePayment` - CRUD: Update an invoice payment

### Invoice Split Items

* `ObjectGetInvoiceSplitItem` - CRUD: Retrieve an invoice split item

### Invoice Splits

* `ObjectGetInvoiceSplit` - CRUD: Retrieve an invoice split

### Invoices

* `GetInvoiceApplicationParts` - List all application parts of an invoice
* `GetInvoiceFiles` - List all files of an invoice
* `GetInvoiceItems` - List all items of an invoice
* `GetTaxationItemsOfInvoiceItem` - List all taxation items of an invoice item
* `ObjectDeleteInvoice` - CRUD: Delete an invoice
* `ObjectGetInvoice` - CRUD: Retrieve an invoice
* `ObjectPutInvoice` - CRUD: Update an invoice
* `PostCreditMemoFromInvoice` - Create a credit memo from an invoice
* `PostDebitMemoFromInvoice` - Create a debit memo from an invoice
* `PostEmailInvoice` - Email an invoice
* `PostStandaloneInvoice` - Create a standalone invoice
* `PostUploadFileForInvoice` - Upload a file for an invoice
* `PutBatchUpdateInvoices` - Update invoices
* `PutReverseInvoice` - Reverse an invoice
* `PutUpdateInvoice` - Update an invoice
* `PutWriteOffInvoice` - Write off an invoice

### Journal Runs

* `DeleteJournalRun` - Delete a journal run
* `GetJournalRun` - Retrieve a journal run
* `PostJournalRun` - Create a journal run
* `PutJournalRun` - Cancel a journal run

### Mass Updater

* `GetMassUpdater` - List all results of a mass action
* `PostMassUpdater` - Perform a mass action
* `PutMassUpdater` - Stop a mass action

### Notifications

* `DeleteDeleteEmailTemplate` - Delete an email template
* `DeleteDeleteNotificationDefinition` - Delete a notification definition
* `DeleteDeleteNotificationHistoryForAccount` - Delete notification histories for an account
* `GetCalloutHistory` - List callout notification histories
* `GetEmailHistory` - List email notification histories
* `GetGetEmailTemplate` - Retrieve an email template
* `GetGetNotificationDefinition` - Retrieve a notification definition
* `GetGetNotificationHistoryDeletionTask` - Retrieve a notification history deletion task
* `GetQueryEmailTemplates` - List email templates
* `GetQueryNotificationDefinitions` - List notification definitions
* `PostCreateEmailTemplate` - Create an email template
* `PostCreateNotificationDefinition` - Create a notification definition
* `PutUpdateEmailTemplate` - Update an email template
* `PutUpdateNotificationDefinition` - Update a notification definition

### OAuth

* `CreateToken` - Create an OAuth token

### Operations

* `PostBillingPreview` - Generate a billing preview
* `PostTransactionInvoicePayment` - Invoice and collect

### Order Line Items

* `GetOrderLineItem` - Retrieve an order line item
* `PutOrderLineItem` - Update an order line item
* `PostOrderLineItems` - Update order line items

### Orders

* `DeleteOrder` - Delete an order
* `GetAllOrders` - List orders
* `GetJobStatusAndResponse` - Retrieve the status and response of a job
* `GetOrder` - Retrieve an order
* `GetOrderMetricsforEvergreenSubscription` - List order metrics for an evergreen subscription
* `GetOrdersByInvoiceOwner` - List orders of an invoice owner
* `GetOrdersBySubscriptionNumber` - List orders by subscription number
* `GetOrdersBySubscriptionOwner` - List orders of a subscription owner
* `GetSubscriptionTermInfo` - List subscription terms
* `PostCreateOrderAsynchronously` - Create an order asynchronously
* `PostOrder` - Create an order
* `PostPreviewOrder` - Preview an order
* `PostPreviewOrderAsynchronously` - Preview an order asynchronously
* `PutOrderTriggerDates` - Update order action trigger dates
* `PutUpdateOrderCustomFields` - Update order custom fields
* `PutUpdateSubscriptionCustomFields` - Update subscription custom fields

### Payment Gateway Reconciliation

* `PostReconcileRefund` - Reconcile a refund
* `PostRejectPayment` - Reject a payment
* `PostReversePayment` - Reverse a payment
* `PostSettlePayment` - Settle a payment

### Payment Gateways

* `GetPaymentgateways` - List all payment gateways

### Payment Method Snapshots

* `ObjectGetPaymentMethodSnapshot` - CRUD: Retrieve a payment method snapshot

### Payment Method Transaction Logs

* `ObjectGetPaymentMethodTransactionLog` - CRUD: Retrieve a payment method transaction log

### Payment Methods

* `DeletePaymentMethods` - Delete a payment method
* `GetPaymentMethod` - Retrieve a payment method
* `GetPaymentMethodsCreditCard` - List all credit card payment methods of an account
* `GetStoredCredentialProfiles` - List stored credential profiles of a payment method
* `ObjectDeletePaymentMethod` - CRUD: Delete a payment method
* `ObjectGetPaymentMethod` - CRUD: Retrieve a payment method
* `ObjectPostPaymentMethod` - CRUD: Create a payment method
* `ObjectPutPaymentMethod` - CRUD: Update a payment method
* `PostCancelAuthorization` - Cancel authorization
* `PostCancelStoredCredentialProfile` - Cancel a stored credential profile
* `PostCreateAuthorization` - Create authorization
* `PostCreateStoredCredentialProfile` - Create a stored credential profile
* `PostExpireStoredCredentialProfile` - Expire a stored credential profile
* `PostPaymentMethods` - Create a payment method
* `PostPaymentMethodsCreditCard` - Create a credit card payment method
* `PostPaymentMethodsDecryption` - Create an Apple Pay payment method
* `PutPaymentMethod` - Update a payment method
* `PutPaymentMethodsCreditCard` - Update a credit card payment method
* `PutScrubPaymentMethods` - Scrub a payment method
* `PutVerifyPaymentMethods` - Verify a payment method

### Payment Runs

* `DeletePaymentRun` - Delete a payment run
* `GetPaymentRun` - Retrieve a payment run
* `GetPaymentRunData` - Retrieve payment run data
* `GetPaymentRunSummary` - Retrieve a payment run summary
* `GetPaymentRuns` - List payment runs
* `PostPaymentRun` - Create a payment run
* `PutPaymentRun` - Update a payment run

### Payment Transaction Logs

* `ObjectGetPaymentTransactionLog` - CRUD: Retrieve a payment transaction log

### Payments

* `DeletePayment` - Delete a payment
* `GetPayment` - Retrieve a payment
* `GetPaymentItemPart` - Retrieve a payment part item
* `GetPaymentItemParts` - List all payment part items
* `GetPaymentPart` - Retrieve a payment part
* `GetPaymentParts` - List all parts of a payment
* `GetRetrieveAllPayments` - List payments
* `ObjectDeletePayment` - CRUD: Delete a payment
* `ObjectGetPayment` - CRUD: Retrieve a payment
* `ObjectPostPayment` - CRUD: Create a payment
* `ObjectPutPayment` - CRUD: Update a payment
* `PostCreatePayment` - Create a payment
* `PostRefundPayment` - Refund a payment
* `PutApplyPayment` - Apply a payment
* `PutCancelPayment` - Cancel a payment
* `PutTransferPayment` - Transfer a payment
* `PutUnapplyPayment` - Unapply a payment
* `PutUpdatePayment` - Update a payment

### Product Features

* `ObjectDeleteProductFeature` - CRUD: Delete a product feature
* `ObjectGetProductFeature` - CRUD: Retrieve a product feature

### Product Rate Plan Charge Tiers

* `ObjectGetProductRatePlanChargeTier` - CRUD: Retrieve a product rate plan charge tier
* `ObjectPutProductRatePlanChargeTier` - CRUD: Update a product rate plan charge tier

### Product Rate Plan Charges

* `ObjectDeleteProductRatePlanCharge` - CRUD: Delete a product rate plan charge
* `ObjectGetProductRatePlanCharge` - CRUD: Retrieve a product rate plan charge
* `ObjectPostProductRatePlanCharge` - CRUD: Create a product rate plan charge
* `ObjectPutProductRatePlanCharge` - CRUD: Update a product rate plan charge

### Product Rate Plans

* `GetProductRatePlans` - List all product rate plans of a product
* `ObjectDeleteProductRatePlan` - CRUD: Delete a product rate plan
* `ObjectGetProductRatePlan` - CRUD: Retrieve a product rate plan
* `ObjectPostProductRatePlan` - CRUD: Create a product rate plan
* `ObjectPutProductRatePlan` - CRUD: Update a product rate plan

### Products

* `ObjectDeleteProduct` - CRUD: Delete a product
* `ObjectGetProduct` - CRUD: Retrieve a product
* `ObjectPostProduct` - CRUD: Create a product
* `ObjectPutProduct` - CRUD: Update a product

### Quotes Document

* `PostQuotesDocument` - Generate a quote document

### RSA Signatures

* `PostDecryptRsaSignatures` - Decrypt an RSA signature
* `PostRsaSignatures` - Generate an RSA signature

### Ramps

* `GetRampByRampNumber` - Retrieve a ramp
* `GetRampMetricsByOrderNumber` - List ramp metrics by order number
* `GetRampMetricsByRampNumber` - List all ramp metrics of a ramp
* `GetRampMetricsBySubscriptionKey` - List ramp metrics by subscription key
* `GetRampsBySubscriptionKey` - Retrieve a ramp by subscription key

### Rate Plan Charge Tiers

* `ObjectGetRatePlanChargeTier` - CRUD: Retrieve a rate plan charge tier

### Rate Plan Charges

* `ObjectGetRatePlanCharge` - CRUD: Retrieve a rate plan charge
* `ObjectPutRatePlanCharge` - CRUD: Update a rate plan charge

### Rate Plans

* `ObjectGetRatePlan` - CRUD: Retrieve a rate plan

### Refund Invoice Payments

* `ObjectGetRefundInvoicePayment` - CRUD: Retrieve a refund invoice payment

### Refund Transaction Logs

* `ObjectGetRefundTransactionLog` - CRUD: Retrieve a refund transaction log

### Refunds

* `DeleteRefund` - Delete a refund
* `GetRefund` - Retrieve a refund
* `GetRefundItemPart` - Retrieve a refund part item
* `GetRefundItemParts` - List all refund part items
* `GetRefundPart` - Retrieve a refund part
* `GetRefundParts` - List all parts of a refund
* `GetRefunds` - List refunds
* `ObjectDeleteRefund` - CRUD: Delete a refund
* `ObjectGetRefund` - CRUD: Retrieve a refund
* `ObjectPostRefund` - CRUD: Create a refund
* `ObjectPutRefund` - CRUD: Update a refund
* `PutCancelRefund` - Cancel a refund
* `PutUpdateRefund` - Update a refund

### Revenue Events

* `GetRevenueEventDetails` - Retrieve a revenue event
* `GetRevenueEventForRevenueSchedule` - List all revenue events of a revenue schedule

### Revenue Items

* `GetRevenueItemsByChargeRevenueEventNumber` - List revenue items by revenue event number
* `GetRevenueItemsByChargeRevenueSummaryNumber` - List revenue items by charge revenue summary number
* `GetRevenueItemsByRevenueSchedule` - List all revenue items of a revenue schedule
* `PutCustomFieldsonRevenueItemsByRevenueEvent` - Update custom fields on revenue items by revenue event number
* `PutCustomFieldsonRevenueItemsByRevenueSchedule` - Update custom fields on revenue items by revenue schedule number

### Revenue Rules

* `GetRevenueAutomationStartDate` - Retrieve a revenue automation start date
* `GetRevenueRecRulebyProductRatePlanCharge` - Retrieve a revenue recognition rule by product rate plan charge ID
* `GetRevenueRecRules` - Retrieve a revenue recognition rule by subscription charge ID

### Revenue Schedules

* `DeleteRs` - Delete a revenue schedule
* `GetRs` - List all details of a revenue schedule
* `GetRSbyCreditMemoItem` - Retrieve a revenue schedule by credit memo item ID

* `GetRSbyDebitMemoItem` - Retrieve a revenue schedule by debit memo item ID

* `GetRSbyInvoiceItem` - Retrieve a revenue schedule by invoice item ID
* `GetRSbyInvoiceItemAdjustment` - Retrieve a revenue schedule by invoice item adjustment key
* `GetRSbyProductChargeAndBillingAccount` - List revenue schedules of a product charge by charge ID and account key

* `GetRSforSubscCharge` - List revenue schedules by subscription charge key
* `PostRSforCreditMemoItemDistributeByDateRange` - Create a revenue schedule for a credit memo item (distribute by date range)

* `PostRSforCreditMemoItemManualDistribution` - Create a revenue schedule for a credit memo item (manual distribution)

* `PostRSforDebitMemoItemDistributeByDateRange` - Create a revenue schedule for a debit memo item (distribute by date range)

* `PostRSforDebitMemoItemManualDistribution` - Create a revenue schedule for a debit memo item (distribute by date range)

* `PostRSforInvoiceItemAdjustmentDistributeByDateRange` - Create a revenue schedule for an invoice item adjustment (distribute by date range)
* `PostRSforInvoiceItemAdjustmentManualDistribution` - Create a revenue schedule for an invoice item adjustment (manual distribution)
* `PostRSforInvoiceItemDistributeByDateRange` - Create a revenue schedule for an invoice item (distribute by date range)
* `PostRSforInvoiceItemManualDistribution` - Create a revenue schedule for an invoice item (manual distribution)
* `PostRSforSubscCharge` - Create a revenue schedule by subscription charge key
* `PutRsBasicInfo` - Update a revenue schedule
* `PutRevenueAcrossAp` - Distribute revenue across accounting periods
* `PutRevenueByRecognitionStartandEndDates` - Distribute revenue in a recognition period
* `PutRevenueSpecificDate` - Distribute revenue on a specific date

### Sequence Sets

* `DeleteSequenceSet` - Delete a sequence set
* `GetSequenceSet` - Retrieve a sequence set
* `GetSequenceSets` - List sequence sets
* `PostSequenceSets` - Create sequence sets
* `PutSequenceSet` - Update a sequence set

### Settings

* `GetListAllSettings` - List all settings
* `PostProcessSettingsBatchRequest` - Submit settings requests

### Subscription Product Features

* `ObjectGetSubscriptionProductFeature` - CRUD: Retrieve a subscription product feature

### Subscriptions

* `GetSubscriptionsByAccount` - List subscriptions by account key
* `GetSubscriptionsByKey` - Retrieve a subscription by key
* `GetSubscriptionsByKeyAndVersion` - Retrieve a subscription by key and version
* `ObjectDeleteSubscription` - CRUD: Delete a subscription
* `ObjectGetSubscription` - CRUD: Retrieve a subscription
* `ObjectPutSubscription` - CRUD: Update a subscription
* `PostPreviewSubscription` - Preview a subscription
* `PostSubscription` - Create a subscription
* `PutCancelSubscription` - Cancel a subscription
* `PutRenewSubscription` - Renew a subscription
* `PutResumeSubscription` - Resume a subscription
* `PutSubscription` - Update a subscription
* `PutSuspendSubscription` - Suspend a subscription
* `PutUpdateSubscriptionCustomFieldsOfASpecifiedVersion` - Update subscription custom fields of a subscription version

### Summary Journal Entries

* `DeleteSummaryJournalEntry` - Delete a summary journal entry
* `GetAllSummaryJournalEntries` - List all summary journal entries in a journal run
* `GetSummaryJournalEntry` - Retrieve a summary journal entry
* `PostSummaryJournalEntry` - Create a summary journal entry
* `PutBasicSummaryJournalEntry` - Update a summary journal entry
* `PutSummaryJournalEntry` - Cancel a summary journal entry

### Taxation Items

* `DeleteTaxationItem` - Delete a taxation item
* `GetTaxationItem` - Retrieve a taxation item

* `ObjectDeleteTaxationItem` - CRUD: Delete a taxation item
* `ObjectGetTaxationItem` - CRUD: Retrieve a taxation item
* `ObjectPostTaxationItem` - CRUD: Create a taxation item
* `ObjectPutTaxationItem` - CRUD: Update a taxation item
* `PutTaxationItem` - Update a taxation item

### Transactions

* `GetTransactionInvoice` - List all invoices for an account
* `GetTransactionPayment` - List all payments for an account

### Unit Of Measure

* `ObjectDeleteUnitOfMeasure` - CRUD: Delete a unit of measure
* `ObjectGetUnitOfMeasure` - CRUD: Retrieve a unit of measure
* `ObjectPostUnitOfMeasure` - CRUD: Create a unit of measure
* `ObjectPutUnitOfMeasure` - CRUD: Update a unit of measure

### Usage

* `GetUsage` - Retrieve a usage record
* `ObjectDeleteUsage` - CRUD: Delete a usage record
* `ObjectGetUsage` - CRUD: Retrieve a usage record
* `ObjectPostUsage` - CRUD: Create a usage record
* `ObjectPutUsage` - CRUD: Update a usage record
* `PostUsage` - Upload a usage file

### Users

* `GetEntitiesUserAccessible` - Multi-entity: List all entities that a user can access
* `PutAcceptUserAccess` - Multi-entity: Accept user access
* `PutDenyUserAccess` - Multi-entity: Deny user access
* `PutSendUserAccessRequests` - Multi-entity: Send user access requests

### Workflows

* `DeleteWorkflow` - Delete a workflow
* `GetWorkflow` - Retrieve a workflow
* `GetWorkflowExport` - Export a workflow
* `GetWorkflows` - List workflows
* `GetWorkflowsTask` - Retrieve a workflow task
* `GetWorkflowsTasks` - List workflow tasks
* `GetWorkflowsUsages` - Retrieve workflow task usage
* `PatchUpdateWorkflow` - Update a workflow definition
* `PostRunWorkflow` - Run a workflow
* `PostWorkflowImport` - Import a workflow
* `PostWorkflowsTaskRerun` - Rerun a workflow task
* `PutWorkflowsTasksUpdate` - Update workflow tasks

### Zuora Revenue Integration

* `PutRevProAccountingCodes` - Update a Zuora Revenue accounting code

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
