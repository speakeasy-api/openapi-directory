# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAccountingCodeRequest(
    path_params=operations.DeleteAccountingCodePathParams(
        ac_id="distinctio",
    ),
    headers=operations.DeleteAccountingCodeHeaders(
        zuora_entity_ids="voluptas",
        zuora_track_id="quos",
    ),
)
    
res = s.accounting_codes.delete_accounting_code(req)

if res.common_response_type is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Accounting Codes

* `delete_accounting_code` - Delete an accounting code
* `get_accounting_code` - Retrieve an accounting code
* `get_all_accounting_codes` - List all accounting codes
* `post_accounting_code` - Create an accounting code
* `put_accounting_code` - Update an accounting code
* `put_activate_accounting_code` - Activate an accounting code
* `put_deactivate_accounting_code` - Deactivate an accounting code

### Accounting Periods

* `delete_accounting_period` - Delete an accounting period
* `get_accounting_period` - Retrieve an accounting period
* `get_all_accounting_periods` - List all accounting periods
* `post_accounting_period` - Create an accounting period
* `put_close_accounting_period` - Close an accounting period
* `put_pending_close_accounting_period` - Set an accounting period to pending close
* `put_reopen_accounting_period` - Reopen an accounting period
* `put_run_trial_balance` - Run trial balance
* `put_update_accounting_period` - Update an accounting period

### Accounts

* `get_account` - Retrieve an account
* `get_account_summary` - Retrieve an account summary
* `object_delete_account` - CRUD: Delete an account
* `object_get_account` - CRUD: Retrieve an account
* `object_post_account` - CRUD: Create an account
* `object_put_account` - CRUD: Update an account
* `post_account` - Create an account
* `put_account` - Update an account

### Actions

* `action_pos_tamend` - Amend
* `action_pos_tcreate` - Create
* `action_pos_tdelete` - Delete
* `action_pos_texecute` - Execute
* `action_pos_tgenerate` - Generate
* `action_pos_tquery` - Query
* `action_pos_tquery_more` - QueryMore
* `action_pos_tsubscribe` - Subscribe
* `action_pos_tupdate` - Update

### Amendments

* `get_amendments_by_key` - Retrieve an amendment
* `get_amendments_by_subscription_id` - List all amendments of a subscription
* `object_delete_amendment` - CRUD: Delete an amendment
* `object_get_amendment` - CRUD: Retrieve an amendment
* `object_put_amendment` - CRUD: Update an amendment

### Attachments

* `delete_attachments` - Delete an attachment
* `get_attachments` - Retrieve an attachment
* `get_attachments_list` - List attachments by object type and key
* `post_attachments` - Create an attachment
* `put_attachments` - Update an attachment

### Bill Run

* `object_delete_bill_run` - CRUD: Delete a bill run
* `object_get_bill_run` - CRUD: Retrieve a bill run
* `object_post_bill_run` - CRUD: Create a bill run
* `object_put_bill_run` - CRUD: Post or cancel a bill run
* `post_email_billing_documentsfrom_bill_run` - Email billing documents generated from a bill run

### Billing Documents

* `get_billing_document_files_deletion_job` - Retrieve a job of hard deleting billing document files
* `get_billing_documents` - List billing documents for an account
* `post_billing_document_files_deletion_job` - Create a job to hard delete billing document files
* `post_generate_billing_documents` - Generate billing documents by account ID

### Billing Preview Run

* `get_billing_preview_run` - Retrieve a billing preview run
* `post_billing_preview_run` - Create a billing preview run

### Catalog

* `get_catalog` - List all products
* `get_product` - Retrieve a product
* `post_catalog` - Multi-entity: Share a product with an entity

### Charge Metrics

* `get_charge_metrics` - List charge metrics by time range
* `get_charge_metrics_discount_allocation_details` - List discount allocation details by time range

### Charge Revenue Summaries

* `get_crs_by_crs_number` - List all details of a charge revenue summary
* `get_crs_by_charge_id` - Retrieve a charge revenue summary by charge ID

### Communication Profiles

* `object_get_communication_profile` - CRUD: Retrieve a communication profile

### Connections

* `post_connections` - Establish a connection to Zuora REST API

### Contacts

* `object_delete_contact` - CRUD: Delete a contact
* `object_get_contact` - CRUD: Retrieve a contact
* `object_post_contact` - CRUD: Create a contact
* `object_put_contact` - CRUD: Update a contact
* `put_scrub_contact` - Scrub a contact

### Credit Balance Adjustments

* `object_get_credit_balance_adjustment` - CRUD: Retrieve a credit balance adjustment
* `object_post_credit_balance_adjustment` - CRUD: Create a credit balance adjustment
* `object_put_credit_balance_adjustment` - CRUD: Update a credit balance adjustment

### Credit Memos

* `delete_credit_memo` - Delete a credit memo
* `get_credit_memo` - Retrieve a credit memo
* `get_credit_memo_item` - Retrieve a credit memo item
* `get_credit_memo_item_part` - Retrieve a credit memo part item
* `get_credit_memo_item_parts` - List all credit memo part items
* `get_credit_memo_items` - List credit memo items
* `get_credit_memo_part` - Retrieve a credit memo part
* `get_credit_memo_parts` - List all parts of a credit memo
* `get_credit_memos` - List credit memos
* `get_taxation_items_of_credit_memo_item` - List all taxation items of a credit memo item
* `post_cm_taxation_items` - Create taxation items for a credit memo
* `post_credit_memo_from_prpc` - Create a credit memo from a charge
* `post_credit_memo_pdf` - Generate a credit memo PDF file
* `post_email_credit_memo` - Email a credit memo
* `post_refund_credit_memo` - Refund a credit memo
* `post_upload_file_for_credit_memo` - Upload a file for a credit memo
* `put_apply_credit_memo` - Apply a credit memo
* `put_cancel_credit_memo` - Cancel a credit memo
* `put_post_credit_memo` - Post a credit memo
* `put_unapply_credit_memo` - Unapply a credit memo
* `put_unpost_credit_memo` - Unpost a credit memo
* `put_update_credit_memo` - Update a credit memo

### Custom Exchange Rates

* `get_custom_exchange_rates` - List custom exchange rates by currency

### Custom Object Definitions

* `delete_custom_object_definition_by_type` - Delete a custom object definition
* `get_all_custom_object_definitions_in_namespace` - List custom object definitions
* `get_custom_object_definition_by_type` - Retrieve a custom object definition
* `post_custom_object_definitions` - Create custom object definitions
* `post_update_custom_object_definition` - Update a custom object definition

### Custom Object Jobs

* `get_all_custom_object_bulk_jobs` - List all custom object bulk jobs
* `get_custom_object_bulk_job` - Retrieve a custom object bulk job
* `get_custom_object_bulk_job_errors` - List all errors for a custom object bulk job
* `post_custom_object_bulk_job` - Submit a custom object bulk job
* `post_upload_file_for_custom_object_bulk_job` - Upload a file for a custom object bulk job

### Custom Object Records

* `delete_custom_object_record_by_id` - Delete a custom object record
* `get_all_records_for_custom_object_type` - List records for a custom object
* `get_custom_object_record_by_id` - Retrieve a custom object record
* `post_custom_object_records` - Create custom object records
* `post_custom_object_records_batch_update_or_delete` - Update or delete custom object records
* `put_custom_object_record` - Update a custom object record
* `patch_partial_update_custom_object_record` - Partially update a custom object record

### Data Queries

* `delete_data_query_job` - Cancel a data query job
* `get_data_query_job` - Retrieve a data query job
* `get_data_query_jobs` - List data query jobs
* `post_data_query_job` - Submit a data query

### Debit Memos

* `delete_debit_memo` - Delete a debit memo
* `get_debit_memo` - Retrieve a debit memo
* `get_debit_memo_application_parts` - List all application parts of a debit memo
* `get_debit_memo_item` - Retrieve a debit memo item
* `get_debit_memo_items` - List debit memo items
* `get_debit_memos` - List debit memos
* `get_taxation_items_of_debit_memo_item` - List all taxation items of a debit memo item
* `post_dm_taxation_items` - Create taxation items for a debit memo
* `post_debit_memo_collect` - Collect a posted debit memo
* `post_debit_memo_from_prpc` - Create a debit memo from a charge
* `post_debit_memo_pdf` - Generate a debit memo PDF file
* `post_email_debit_memo` - Email a debit memo
* `post_upload_file_for_debit_memo` - Upload a file for a debit memo
* `put_batch_update_debit_memos` - Update debit memos
* `put_cancel_debit_memo` - Cancel a debit memo
* `put_debit_memo` - Update a debit memo
* `put_post_debit_memo` - Post a debit memo
* `put_unpost_debit_memo` - Unpost a debit memo

### Describe

* `get_describe` - Describe an object

### Document Properties

* `delete_document_properties` - Delete document properties
* `get_document_properies` - List all properties of a billing document
* `post_document_properties` - Create document properties
* `put_document_properties` - Update document properties

### Entities

* `delete_entities` - Multi-entity: Delete an entity
* `get_entities` - Multi-entity: List entities
* `get_entity_by_id` - Multi-entity: Retrieve an entity
* `post_entities` - Multi-entity: Create an entity
* `put_entities` - Multi-entity: Update an entity
* `put_provision_entity` - Multi-entity: Provision an entity

### Entity Connections

* `get_entity_connections` - Multi-entity: List connections
* `post_entity_connections` - Multi-entity: Initiate a connection request
* `put_entity_connections_accept` - Multi-entity: Accept a connection request
* `put_entity_connections_deny` - Multi-entity: Deny a connection request
* `put_entity_connections_disconnect` - Multi-entity: Disconnect a connection

### Event Triggers

* `delete_event_trigger` - Delete an event trigger
* `get_event_trigger` - Retrieve an event trigger
* `get_event_triggers` - List event triggers
* `post_event_trigger` - Create an event trigger
* `put_event_trigger` - Update an event trigger

### Exports

* `object_get_export` - CRUD: Retrieve an export
* `object_post_export` - CRUD: Create an export

### Features

* `object_delete_feature` - CRUD: Delete a feature
* `object_get_feature` - CRUD: Retrieve a feature
* `object_post_feature` - CRUD: Create a feature
* `object_put_feature` - CRUD: Update a feature

### Files

* `get_files` - Retrieve a file

### HMAC Signatures

* `post_hmac_signatures` - Generate an HMAC signature

### Hosted Pages

* `get_hosted_pages` - List hosted pages

### Imports

* `object_get_import` - CRUD: Retrieve an import
* `object_post_import` - CRUD: Create an import

### Invoice Adjustments

* `object_delete_invoice_adjustment` - CRUD: Delete an invoice adjustment
* `object_get_invoice_adjustment` - CRUD: Retrieve an invoice adjustment
* `object_post_invoice_adjustment` - CRUD: Create an invoice adjustment
* `object_put_invoice_adjustment` - CRUD: Update an invoice adjustment

### Invoice Item Adjustments

* `object_delete_invoice_item_adjustment` - CRUD: Delete an invoice item adjustment
* `object_get_invoice_item_adjustment` - CRUD: Retrieve an invoice item adjustment

### Invoice Items

* `object_get_invoice_item` - CRUD: Retrieve an invoice item

### Invoice Payments

* `object_get_invoice_payment` - CRUD: Retrieve an invoice payment
* `object_post_invoice_payment` - CRUD: Create an invoice payment
* `object_put_invoice_payment` - CRUD: Update an invoice payment

### Invoice Split Items

* `object_get_invoice_split_item` - CRUD: Retrieve an invoice split item

### Invoice Splits

* `object_get_invoice_split` - CRUD: Retrieve an invoice split

### Invoices

* `get_invoice_application_parts` - List all application parts of an invoice
* `get_invoice_files` - List all files of an invoice
* `get_invoice_items` - List all items of an invoice
* `get_taxation_items_of_invoice_item` - List all taxation items of an invoice item
* `object_delete_invoice` - CRUD: Delete an invoice
* `object_get_invoice` - CRUD: Retrieve an invoice
* `object_put_invoice` - CRUD: Update an invoice
* `post_credit_memo_from_invoice` - Create a credit memo from an invoice
* `post_debit_memo_from_invoice` - Create a debit memo from an invoice
* `post_email_invoice` - Email an invoice
* `post_standalone_invoice` - Create a standalone invoice
* `post_upload_file_for_invoice` - Upload a file for an invoice
* `put_batch_update_invoices` - Update invoices
* `put_reverse_invoice` - Reverse an invoice
* `put_update_invoice` - Update an invoice
* `put_write_off_invoice` - Write off an invoice

### Journal Runs

* `delete_journal_run` - Delete a journal run
* `get_journal_run` - Retrieve a journal run
* `post_journal_run` - Create a journal run
* `put_journal_run` - Cancel a journal run

### Mass Updater

* `get_mass_updater` - List all results of a mass action
* `post_mass_updater` - Perform a mass action
* `put_mass_updater` - Stop a mass action

### Notifications

* `delete_delete_email_template` - Delete an email template
* `delete_delete_notification_definition` - Delete a notification definition
* `delete_delete_notification_history_for_account` - Delete notification histories for an account
* `get_callout_history` - List callout notification histories
* `get_email_history` - List email notification histories
* `get_get_email_template` - Retrieve an email template
* `get_get_notification_definition` - Retrieve a notification definition
* `get_get_notification_history_deletion_task` - Retrieve a notification history deletion task
* `get_query_email_templates` - List email templates
* `get_query_notification_definitions` - List notification definitions
* `post_create_email_template` - Create an email template
* `post_create_notification_definition` - Create a notification definition
* `put_update_email_template` - Update an email template
* `put_update_notification_definition` - Update a notification definition

### OAuth

* `create_token` - Create an OAuth token

### Operations

* `post_billing_preview` - Generate a billing preview
* `post_transaction_invoice_payment` - Invoice and collect

### Order Line Items

* `get_order_line_item` - Retrieve an order line item
* `put_order_line_item` - Update an order line item
* `post_order_line_items` - Update order line items

### Orders

* `delete_order` - Delete an order
* `get_all_orders` - List orders
* `get_job_status_and_response` - Retrieve the status and response of a job
* `get_order` - Retrieve an order
* `get_order_metricsfor_evergreen_subscription` - List order metrics for an evergreen subscription
* `get_orders_by_invoice_owner` - List orders of an invoice owner
* `get_orders_by_subscription_number` - List orders by subscription number
* `get_orders_by_subscription_owner` - List orders of a subscription owner
* `get_subscription_term_info` - List subscription terms
* `post_create_order_asynchronously` - Create an order asynchronously
* `post_order` - Create an order
* `post_preview_order` - Preview an order
* `post_preview_order_asynchronously` - Preview an order asynchronously
* `put_order_trigger_dates` - Update order action trigger dates
* `put_update_order_custom_fields` - Update order custom fields
* `put_update_subscription_custom_fields` - Update subscription custom fields

### Payment Gateway Reconciliation

* `post_reconcile_refund` - Reconcile a refund
* `post_reject_payment` - Reject a payment
* `post_reverse_payment` - Reverse a payment
* `post_settle_payment` - Settle a payment

### Payment Gateways

* `get_paymentgateways` - List all payment gateways

### Payment Method Snapshots

* `object_get_payment_method_snapshot` - CRUD: Retrieve a payment method snapshot

### Payment Method Transaction Logs

* `object_get_payment_method_transaction_log` - CRUD: Retrieve a payment method transaction log

### Payment Methods

* `delete_payment_methods` - Delete a payment method
* `get_payment_method` - Retrieve a payment method
* `get_payment_methods_credit_card` - List all credit card payment methods of an account
* `get_stored_credential_profiles` - List stored credential profiles of a payment method
* `object_delete_payment_method` - CRUD: Delete a payment method
* `object_get_payment_method` - CRUD: Retrieve a payment method
* `object_post_payment_method` - CRUD: Create a payment method
* `object_put_payment_method` - CRUD: Update a payment method
* `post_cancel_authorization` - Cancel authorization
* `post_cancel_stored_credential_profile` - Cancel a stored credential profile
* `post_create_authorization` - Create authorization
* `post_create_stored_credential_profile` - Create a stored credential profile
* `post_expire_stored_credential_profile` - Expire a stored credential profile
* `post_payment_methods` - Create a payment method
* `post_payment_methods_credit_card` - Create a credit card payment method
* `post_payment_methods_decryption` - Create an Apple Pay payment method
* `put_payment_method` - Update a payment method
* `put_payment_methods_credit_card` - Update a credit card payment method
* `put_scrub_payment_methods` - Scrub a payment method
* `put_verify_payment_methods` - Verify a payment method

### Payment Runs

* `delete_payment_run` - Delete a payment run
* `get_payment_run` - Retrieve a payment run
* `get_payment_run_data` - Retrieve payment run data
* `get_payment_run_summary` - Retrieve a payment run summary
* `get_payment_runs` - List payment runs
* `post_payment_run` - Create a payment run
* `put_payment_run` - Update a payment run

### Payment Transaction Logs

* `object_get_payment_transaction_log` - CRUD: Retrieve a payment transaction log

### Payments

* `delete_payment` - Delete a payment
* `get_payment` - Retrieve a payment
* `get_payment_item_part` - Retrieve a payment part item
* `get_payment_item_parts` - List all payment part items
* `get_payment_part` - Retrieve a payment part
* `get_payment_parts` - List all parts of a payment
* `get_retrieve_all_payments` - List payments
* `object_delete_payment` - CRUD: Delete a payment
* `object_get_payment` - CRUD: Retrieve a payment
* `object_post_payment` - CRUD: Create a payment
* `object_put_payment` - CRUD: Update a payment
* `post_create_payment` - Create a payment
* `post_refund_payment` - Refund a payment
* `put_apply_payment` - Apply a payment
* `put_cancel_payment` - Cancel a payment
* `put_transfer_payment` - Transfer a payment
* `put_unapply_payment` - Unapply a payment
* `put_update_payment` - Update a payment

### Product Features

* `object_delete_product_feature` - CRUD: Delete a product feature
* `object_get_product_feature` - CRUD: Retrieve a product feature

### Product Rate Plan Charge Tiers

* `object_get_product_rate_plan_charge_tier` - CRUD: Retrieve a product rate plan charge tier
* `object_put_product_rate_plan_charge_tier` - CRUD: Update a product rate plan charge tier

### Product Rate Plan Charges

* `object_delete_product_rate_plan_charge` - CRUD: Delete a product rate plan charge
* `object_get_product_rate_plan_charge` - CRUD: Retrieve a product rate plan charge
* `object_post_product_rate_plan_charge` - CRUD: Create a product rate plan charge
* `object_put_product_rate_plan_charge` - CRUD: Update a product rate plan charge

### Product Rate Plans

* `get_product_rate_plans` - List all product rate plans of a product
* `object_delete_product_rate_plan` - CRUD: Delete a product rate plan
* `object_get_product_rate_plan` - CRUD: Retrieve a product rate plan
* `object_post_product_rate_plan` - CRUD: Create a product rate plan
* `object_put_product_rate_plan` - CRUD: Update a product rate plan

### Products

* `object_delete_product` - CRUD: Delete a product
* `object_get_product` - CRUD: Retrieve a product
* `object_post_product` - CRUD: Create a product
* `object_put_product` - CRUD: Update a product

### Quotes Document

* `post_quotes_document` - Generate a quote document

### RSA Signatures

* `post_decrypt_rsa_signatures` - Decrypt an RSA signature
* `post_rsa_signatures` - Generate an RSA signature

### Ramps

* `get_ramp_by_ramp_number` - Retrieve a ramp
* `get_ramp_metrics_by_order_number` - List ramp metrics by order number
* `get_ramp_metrics_by_ramp_number` - List all ramp metrics of a ramp
* `get_ramp_metrics_by_subscription_key` - List ramp metrics by subscription key
* `get_ramps_by_subscription_key` - Retrieve a ramp by subscription key

### Rate Plan Charge Tiers

* `object_get_rate_plan_charge_tier` - CRUD: Retrieve a rate plan charge tier

### Rate Plan Charges

* `object_get_rate_plan_charge` - CRUD: Retrieve a rate plan charge
* `object_put_rate_plan_charge` - CRUD: Update a rate plan charge

### Rate Plans

* `object_get_rate_plan` - CRUD: Retrieve a rate plan

### Refund Invoice Payments

* `object_get_refund_invoice_payment` - CRUD: Retrieve a refund invoice payment

### Refund Transaction Logs

* `object_get_refund_transaction_log` - CRUD: Retrieve a refund transaction log

### Refunds

* `delete_refund` - Delete a refund
* `get_refund` - Retrieve a refund
* `get_refund_item_part` - Retrieve a refund part item
* `get_refund_item_parts` - List all refund part items
* `get_refund_part` - Retrieve a refund part
* `get_refund_parts` - List all parts of a refund
* `get_refunds` - List refunds
* `object_delete_refund` - CRUD: Delete a refund
* `object_get_refund` - CRUD: Retrieve a refund
* `object_post_refund` - CRUD: Create a refund
* `object_put_refund` - CRUD: Update a refund
* `put_cancel_refund` - Cancel a refund
* `put_update_refund` - Update a refund

### Revenue Events

* `get_revenue_event_details` - Retrieve a revenue event
* `get_revenue_event_for_revenue_schedule` - List all revenue events of a revenue schedule

### Revenue Items

* `get_revenue_items_by_charge_revenue_event_number` - List revenue items by revenue event number
* `get_revenue_items_by_charge_revenue_summary_number` - List revenue items by charge revenue summary number
* `get_revenue_items_by_revenue_schedule` - List all revenue items of a revenue schedule
* `put_custom_fieldson_revenue_items_by_revenue_event` - Update custom fields on revenue items by revenue event number
* `put_custom_fieldson_revenue_items_by_revenue_schedule` - Update custom fields on revenue items by revenue schedule number

### Revenue Rules

* `get_revenue_automation_start_date` - Retrieve a revenue automation start date
* `get_revenue_rec_ruleby_product_rate_plan_charge` - Retrieve a revenue recognition rule by product rate plan charge ID
* `get_revenue_rec_rules` - Retrieve a revenue recognition rule by subscription charge ID

### Revenue Schedules

* `delete_rs` - Delete a revenue schedule
* `get_rs` - List all details of a revenue schedule
* `get_r_sby_credit_memo_item` - Retrieve a revenue schedule by credit memo item ID

* `get_r_sby_debit_memo_item` - Retrieve a revenue schedule by debit memo item ID

* `get_r_sby_invoice_item` - Retrieve a revenue schedule by invoice item ID
* `get_r_sby_invoice_item_adjustment` - Retrieve a revenue schedule by invoice item adjustment key
* `get_r_sby_product_charge_and_billing_account` - List revenue schedules of a product charge by charge ID and account key

* `get_r_sfor_subsc_charge` - List revenue schedules by subscription charge key
* `post_r_sfor_credit_memo_item_distribute_by_date_range` - Create a revenue schedule for a credit memo item (distribute by date range)

* `post_r_sfor_credit_memo_item_manual_distribution` - Create a revenue schedule for a credit memo item (manual distribution)

* `post_r_sfor_debit_memo_item_distribute_by_date_range` - Create a revenue schedule for a debit memo item (distribute by date range)

* `post_r_sfor_debit_memo_item_manual_distribution` - Create a revenue schedule for a debit memo item (distribute by date range)

* `post_r_sfor_invoice_item_adjustment_distribute_by_date_range` - Create a revenue schedule for an invoice item adjustment (distribute by date range)
* `post_r_sfor_invoice_item_adjustment_manual_distribution` - Create a revenue schedule for an invoice item adjustment (manual distribution)
* `post_r_sfor_invoice_item_distribute_by_date_range` - Create a revenue schedule for an invoice item (distribute by date range)
* `post_r_sfor_invoice_item_manual_distribution` - Create a revenue schedule for an invoice item (manual distribution)
* `post_r_sfor_subsc_charge` - Create a revenue schedule by subscription charge key
* `put_rs_basic_info` - Update a revenue schedule
* `put_revenue_across_ap` - Distribute revenue across accounting periods
* `put_revenue_by_recognition_startand_end_dates` - Distribute revenue in a recognition period
* `put_revenue_specific_date` - Distribute revenue on a specific date

### Sequence Sets

* `delete_sequence_set` - Delete a sequence set
* `get_sequence_set` - Retrieve a sequence set
* `get_sequence_sets` - List sequence sets
* `post_sequence_sets` - Create sequence sets
* `put_sequence_set` - Update a sequence set

### Settings

* `get_list_all_settings` - List all settings
* `post_process_settings_batch_request` - Submit settings requests

### Subscription Product Features

* `object_get_subscription_product_feature` - CRUD: Retrieve a subscription product feature

### Subscriptions

* `get_subscriptions_by_account` - List subscriptions by account key
* `get_subscriptions_by_key` - Retrieve a subscription by key
* `get_subscriptions_by_key_and_version` - Retrieve a subscription by key and version
* `object_delete_subscription` - CRUD: Delete a subscription
* `object_get_subscription` - CRUD: Retrieve a subscription
* `object_put_subscription` - CRUD: Update a subscription
* `post_preview_subscription` - Preview a subscription
* `post_subscription` - Create a subscription
* `put_cancel_subscription` - Cancel a subscription
* `put_renew_subscription` - Renew a subscription
* `put_resume_subscription` - Resume a subscription
* `put_subscription` - Update a subscription
* `put_suspend_subscription` - Suspend a subscription
* `put_update_subscription_custom_fields_of_a_specified_version` - Update subscription custom fields of a subscription version

### Summary Journal Entries

* `delete_summary_journal_entry` - Delete a summary journal entry
* `get_all_summary_journal_entries` - List all summary journal entries in a journal run
* `get_summary_journal_entry` - Retrieve a summary journal entry
* `post_summary_journal_entry` - Create a summary journal entry
* `put_basic_summary_journal_entry` - Update a summary journal entry
* `put_summary_journal_entry` - Cancel a summary journal entry

### Taxation Items

* `delete_taxation_item` - Delete a taxation item
* `get_taxation_item` - Retrieve a taxation item

* `object_delete_taxation_item` - CRUD: Delete a taxation item
* `object_get_taxation_item` - CRUD: Retrieve a taxation item
* `object_post_taxation_item` - CRUD: Create a taxation item
* `object_put_taxation_item` - CRUD: Update a taxation item
* `put_taxation_item` - Update a taxation item

### Transactions

* `get_transaction_invoice` - List all invoices for an account
* `get_transaction_payment` - List all payments for an account

### Unit Of Measure

* `object_delete_unit_of_measure` - CRUD: Delete a unit of measure
* `object_get_unit_of_measure` - CRUD: Retrieve a unit of measure
* `object_post_unit_of_measure` - CRUD: Create a unit of measure
* `object_put_unit_of_measure` - CRUD: Update a unit of measure

### Usage

* `get_usage` - Retrieve a usage record
* `object_delete_usage` - CRUD: Delete a usage record
* `object_get_usage` - CRUD: Retrieve a usage record
* `object_post_usage` - CRUD: Create a usage record
* `object_put_usage` - CRUD: Update a usage record
* `post_usage` - Upload a usage file

### Users

* `get_entities_user_accessible` - Multi-entity: List all entities that a user can access
* `put_accept_user_access` - Multi-entity: Accept user access
* `put_deny_user_access` - Multi-entity: Deny user access
* `put_send_user_access_requests` - Multi-entity: Send user access requests

### Workflows

* `delete_workflow` - Delete a workflow
* `get_workflow` - Retrieve a workflow
* `get_workflow_export` - Export a workflow
* `get_workflows` - List workflows
* `get_workflows_task` - Retrieve a workflow task
* `get_workflows_tasks` - List workflow tasks
* `get_workflows_usages` - Retrieve workflow task usage
* `patch_update_workflow` - Update a workflow definition
* `post_run_workflow` - Run a workflow
* `post_workflow_import` - Import a workflow
* `post_workflows_task_rerun` - Rerun a workflow task
* `put_workflows_tasks_update` - Update workflow tasks

### Zuora Revenue Integration

* `put_rev_pro_accounting_codes` - Update a Zuora Revenue accounting code

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
