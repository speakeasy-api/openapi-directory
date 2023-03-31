# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/xtrf.eu/2.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        x_auth_access_token="YOUR_API_KEY_HERE",
    ),
)


req = operations.BrowseCSVRequest(
    additional_order="corrupti",
    secondary_separator="provident",
    separator="distinctio",
    view_id=844266,
)
    
res = s.browser.browse_csv(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### browser

* `browse_csv` - Searches for data (ie. customer, task, etc) and returns it in a CSV form.
* `browse_json` - Searches for data (ie. customer, task, etc) and returns it in a tabular form.
* `create` - Creates view for given class.
* `delete` - Removes a view.
* `delete_column` - Deletes a single column from view.
* `get` - Returns all view's information.
* `get_column_settings` - Returns column's specific settings.
* `get_columns` - Returns columns defined in view.
* `get_current_view_details` - Returns current view's detailed information, suitable for browser.
* `get_filter` - Returns view's filter.
* `get_local_settings` - Returns view's local settings (for current user).
* `get_order` - Returns view's order settings.
* `get_permissions` - Returns view's permissions.
* `get_settings` - Returns view's settings.
* `get_view_details` - Returns view's detailed information, suitable for browser.
* `get_views_brief` - Returns views' brief.
* `select_view_and_get_its_details` - Selects given view as current and returns its detailed information, suitable for browser.
* `update` - Updates all view's information.
* `update_column_settings` - Updates column's specific settings.
* `update_columns` - Updates columns in view.
* `update_filter` - Updates view's filter.
* `update_filter_property` - Updates view's filter property.
* `update_local_settings` - Updates view's local settings (for current user).
* `update_order` - Updates view's order settings.
* `update_permissions` - Updates view's permissions.
* `update_settings` - Updates view's settings.

### client_invoices

* `create_payment` - Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.
* `create_1` - Creates a new invoice.
* `delete_1` - Removes a client invoice.
* `delete_2` - Removes a customer payment.
* `download_documents` - Generates client invoices' documents.
* `duplicate` - Duplicate client invoice.
* `duplicate_as_pro_forma` - Duplicate client invoice as pro forma.
* `get_all` - Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* `get_all_ids` - Returns client invoices' internal identifiers.
* `get_by_id` - Returns client invoice details.
* `get_dates` - Returns dates of a given client invoice.
* `get_document` - Generates client invoice document (PDF).
* `get_payment_terms` - Returns payment terms of a given client invoice.
* `get_payments` - Returns all payments for the client invoice.
* `send_reminder` - Sends reminder.
* `send_reminders` - Sends reminders. Returns number of sent e-mails.

### clients

* `create_2` - Creates a new person.
* `create_3` - Creates a new client.
* `delete_3` - Removes a person.
* `delete_4` - Removes a customer price list.
* `delete_5` - Removes a client.
* `generate_single_use_sign_in_token` - Generates a single use sign-in token.
* `get_address` - Returns address of a given client.
* `get_all_ids_1` - Returns persons' internal identifiers.
* `get_all_ids_2` - Returns clients' internal identifiers.
* `get_all_names_with_ids` - Returns list of simple clients representations
* `get_by_id_1` - Returns person details.
* `get_by_id_2` - Returns client details.
* `get_categories` - Returns categories of a given client.
* `get_contact` - Returns contact of a given person.
* `get_contact_1` - Returns contact of a given client.
* `get_correspondence_address` - Returns correspondence address of a given client.
* `get_custom_field` - Returns custom field of a given client.
* `get_custom_fields` - Returns custom fields of a given person.
* `get_custom_fields_1` - Returns custom fields of a given client.
* `get_industries` - Returns industries of a given client.
* `update_address` - Updates address of a given client.
* `update_categories` - Updates categories of a given client.
* `update_contact` - Updates contact of a given person.
* `update_contact_1` - Updates contact of a given client.
* `update_correspondence_address` - Updates correspondence address of a given client.
* `update_custom_field` - Updates given custom field of a given client.
* `update_custom_fields` - Updates custom fields of a given person.
* `update_custom_fields_1` - Updates custom fields of a given client.
* `update_industries` - Updates industries of a given client.
* `update_1` - Updates an existing person.
* `update_2` - Updates an existing client.

### currency_exchange_rates

* `create_exchange_rate` - Adding currency exchange rates.
* `get_by_iso_code` - Returns currency exchange rates.

### dictionaries

* `get_active` - Returns active dictionary entities for all types.
* `get_active_by_type` - Returns active values from a given dictionary.
* `get_all_active` - Returns active services list
* `get_all_by_type` - Returns all values (both active and not active) from a given dictionary.
* `get_all_1` - Returns dictionary entities for all types. Both active and not active ones.
* `get_all_3` - Returns services list
* `get_by_type_and_id` - Returns specific value from a given dictionary.

### files

* `upload_file` - Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.

### jobs_classic

* `assign_file_to_job_output`
* `assign_vendor` - Assigns vendor to a job in a project.
* `change_status` - Changes job status if possible (400 Bad Request is returned otherwise).
* `get_job_details` - Returns job details by jobId.
* `get_job_files` - Returns list of input and output files of a job.
* `get_job_files_1` - Returns file metadata.
* `update_dates` - Updates dates of a given job.
* `update_instructions` - Updates instructions for a job.

### jobs_smart_v2

* `add_external_file_link`
* `add_file_links` - Adds file link to the project as a link delivered in the job.
* `add_files` - Adds files to the project as delivered in the job.
* `assign_vendor_1` - Assigns vendor to a job in a project.
* `change_dates` - Updates dates of a given job.
* `change_status_1` - Changes job status if possible (400 Bad Request is returned otherwise).
* `get_by_external_id`
* `get_delivered_files` - Returns list of files delivered in the job.
* `get_file_by_id_1` - Returns details for a job.
* `get_shared_reference_files` - Returns list of files shared with the job as Reference Files.
* `get_shared_work_files` - Returns list of files shared with the job as Work Files.
* `share_as_reference_files` - Shares selected files as Reference Files with a job in a project.
* `share_as_work_files` - Shares selected files as Work Files with a job in a project.
* `stop_sharing` - Stops sharing selected files with a job in a project.
* `update_instructions_4` - Updates instructions for a job.
* `upload_file_1` - Uploads file to the project as a file delivered in the job.

### license

* `get_license` - Returns license content.
* `refresh` - Refreshes license content.

### macros

* `run` - Executes a macro.

### projects_classic

* `create_language_combination` - Creates a new language combination for a given project without creating a task.
* `create_payable` - Adds a payable to a project.
* `create_receivable` - Adds a receivable to a project.
* `create_task` - Creates a new task for a given project.
* `create_5` - Creates a new Classic Project.
* `delete_payable` - Deletes a payable.
* `delete_receivable` - Deletes a receivable.
* `delete_12` - Removes a project.
* `get_all_ids_6` - Returns projects' internal identifiers.
* `get_by_id_7` - Returns project details.
* `get_contacts` - Returns contacts of a given project.
* `get_custom_fields_5` - Returns custom fields of a given project.
* `get_dates_1` - Returns dates of a given project.
* `get_file_by_id` - Downloads a file.
* `get_finance` - Returns finance of a given project.
* `get_instructions` - Returns instructions of a given project.
* `update_contacts` - Updates contacts of a given project.
* `update_custom_fields_3` - Updates custom fields of a given project.
* `update_dates_1` - Updates dates of a given project.
* `update_instructions_1` - Updates instructions of a given project.
* `update_payable` - Updates a payable.
* `update_receivable` - Updates a receivable.

### projects_smart_v2

* `add_external_file_links`
* `add_file_links_1` - Adds file links to the project as added by PM.
* `add_files_1` - Adds files to the project as added by PM.
* `add_job_to_process` - Returns process id.
* `archive` - Prepares a ZIP archive that contains the specified files.
* `change_status_2` - Changes project status if possible (400 Bad Request is returned otherwise).
* `create_payable_2` - Adds a payable to a project.
* `create_receivable_2` - Adds a receivable to a project.
* `create_6` - Creates a new Smart Project.
* `delete_payable_2` - Deletes a payable.
* `delete_receivable_2` - Deletes a receivable.
* `get_by_external_id_1` - Returns project details.
* `get_by_id_9` - Returns project details.
* `get_cat_tool_project_info` - Returns if cat tool project is created or queued.
* `get_contacts_2` - Returns Client Contacts information for a project.
* `get_custom_fields_8` - Returns a list of custom field keys and values for a project.
* `get_deliverable_files` - Returns list of files in a project, that are ready to be delivered to client.
* `get_file_by_id_2` - Returns details of a file.
* `get_file_content_by_id` - Downloads a file content.
* `get_files` - Returns list of files in a project.
* `get_finance_2` - Returns finance information for a project.
* `get_jobs` - Returns list of jobs in a project.
* `get_process_id` - Returns process id.
* `update_client_deadline` - Updates Client Deadline for a project.
* `update_client_notes` - Updates Client Notes for a project.
* `update_client_reference_number` - Updates Client Reference Number for a project.
* `update_contacts_2` - Updates Client Contacts for a project.
* `update_custom_field_2` - Updates a custom field with a specified key in a project
* `update_internal_notes` - Updates Internal Notes for a project.
* `update_ordered_on` - Updates Order Date for a project.
* `update_payable_2` - Updates a payable.
* `update_receivable_2` - Updates a receivable.
* `update_source_language` - Updates source language for a project.
* `update_specialization` - Updates specialization for a project.
* `update_target_languages` - Updates target languages for a project.
* `update_vendor_instructions` - Updates instructions for all vendors performing the jobs in a project.
* `update_volume` - Updates volume for a project.
* `upload_file_2` - Uploads file to the project as a file uploaded by PM.

### quotes_classic

* `create_language_combination_1` - Creates a new language combination for a given quote without creating a task.
* `create_payable_1` - Adds a payable.
* `create_receivable_1` - Adds a receivable.
* `create_task_1` - Creates a new task for a given quote.
* `delete_payable_1` - Deletes a payable.
* `delete_receivable_1` - Deletes a receivable.
* `delete_13` - Removes a quote.
* `get_all_ids_7` - Returns quotes' internal identifiers.
* `get_by_id_8` - Returns quote details.
* `get_custom_fields_6` - Returns custom fields of a given quote.
* `get_dates_2` - Returns dates of a given quote.
* `get_finance_1` - Returns finance of a given quote.
* `get_instructions_1` - Returns instructions of a given quote.
* `send_1` - Sends a quote for customer confirmation.
* `start` - Starts a quote.
* `update_custom_fields_4` - Updates custom fields of a given quote.
* `update_instructions_2` - Updates instructions of a given quote.
* `update_payable_1` - Updates a payable.
* `update_receivable_1` - Updates a receivable.

### quotes_smart_v2

* `add_files_2` - Adds files to the quote as added by PM.
* `archive_1` - Prepares a ZIP archive that contains the specified files.
* `change_status_3` - Changes quote status if possible (400 Bad Request is returned otherwise).
* `create_payable_3` - Adds a payable to a quote.
* `create_receivable_3` - Adds a receivable to a quote.
* `create_7` - Creates a new Smart Quote.
* `delete_payable_3` - Deletes a payable.
* `delete_receivable_3` - Deletes a receivable.
* `get_by_id_10` - Returns quote details.
* `get_contacts_3` - Returns Client Contacts information for a quote.
* `get_custom_fields_9` - Returns a list of custom field keys and values for a project.
* `get_file_by_id_3` - Returns details of a file.
* `get_file_content_by_id_1` - Downloads a file content.
* `get_files_1` - Returns list of files in a quote.
* `get_finance_3` - Returns finance information for a quote.
* `get_jobs_1` - Returns list of jobs in a quote.
* `update_business_days` - Updates Business Days for a quote.
* `update_client_notes_1` - Updates Client Notes for a quote.
* `update_client_reference_number_1` - Updates Client Reference Number for a quote.
* `update_contacts_3` - Updates Client Contacts for a quote.
* `update_custom_field_3` - Updates a custom field with a specified key in a quote.
* `update_expected_delivery_date` - Updates Expected Delivery Date for a quote.
* `update_internal_notes_1` - Updates Internal Notes for a quote.
* `update_payable_3` - Updates a payable.
* `update_quote_expiry` - Updates Quote Expiry Date for a quote.
* `update_receivable_3` - Updates a receivable.
* `update_source_language_1` - Updates source language for a quote.
* `update_specialization_1` - Updates specialization for a quote.
* `update_target_languages_1` - Updates target languages for a quote.
* `update_vendor_instructions_1` - Updates instructions for all vendors performing the jobs in a quote.
* `update_volume_1` - Updates volume for a quote.
* `upload_file_3` - Uploads file to the quote as a file uploaded by PM.

### reports

* `delete_11` - Removes a report.
* `duplicate_1` - Duplicates a report.
* `export_to_xml` - Exports reports definition to XML.
* `generate_csv` - Generates CSV content for a report.
* `generate_printer_friendly` - Generates printer friendly content for a report.
* `import_from_xml` - Imports reports definition from XML.
* `set_preferred` - Marks report as preferred or not.

### subscription

* `are_hooks_supported` - This method can be used to determine if hooks are supported.
* `get_all_4` - Returns all subscriptions
* `subscribe` - Subscribe to event
* `unsubscribe` - Unsubscribe from event

### tasks_classic

* `add_file` - Adds files to a given task.
* `delete_14` - Removes a task.
* `get_contacts_1` - Returns contacts of a given task.
* `get_custom_fields_7` - Returns custom fields of a given task.
* `get_dates_3` - Returns dates of a given task.
* `get_instructions_2` - Returns instructions of a given task.
* `get_progress` - Returns progress of a given task.
* `get_task_files` - Returns lists of files of a given task.
* `start_1` - Starts a task.
* `update_client_task_po_number` - Updates Client Task PO Number of a given task.
* `update_contacts_1` - Updates contacts of a given task.
* `update_custom_fields_5` - Updates custom fields of a given task.
* `update_dates_2` - Updates dates of a given task.
* `update_instructions_3` - Updates instructions of a given task.
* `update_name` - Updates name of a given task.

### users

* `change_password` - Sets user's password to a new value.
* `get_all_names_with_ids_1` - Returns list of simple users representations
* `get_by_id_6` - Returns user details.
* `get_custom_field_1` - Returns custom field of a given user.
* `get_custom_fields_4` - Returns custom fields of a given user.
* `get_me` - Returns currently signed in user details.
* `get_time_zone` - Returns time zone preferred by user currently signed in.
* `update_custom_field_1` - Updates given custom field of a given user.
* `update_custom_fields_2` - Updates custom fields of a given user.
* `update_3` - Updates an existing user.

### vendor_invoices

* `create_payment_1` - Creates a new payment on the vendor account and assigns the payment to the invoice.
* `create_4` - Creates a new invoice.
* `delete_6` - Removes a provider invoice.
* `delete_7` - Removes a provider payment.
* `get_all_ids_3` - Returns vendor invoices' internal identifiers.
* `get_all_2` - Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* `get_by_id_3` - Returns provider invoice details.
* `get_document_1` - Generates provider invoice document (PDF).
* `get_payments_1` - Returns all payments for the vendor invoice.
* `send` - Sends a provider invoice.
* `set_status` - Changes invoice status to given status.

### vendors

* `delete_10` - Removes a provider.
* `delete_8` - Removes a person.
* `delete_9` - Removes a provider price list.
* `get_address_1` - Returns address of a given provider.
* `get_all_ids_4` - Returns persons' internal identifiers.
* `get_all_ids_5` - Returns providers' internal identifiers.
* `get_by_id_4` - Returns person details.
* `get_by_id_5` - Returns provider details.
* `get_competencies` - Returns competencies of a given provider.
* `get_contact_2` - Returns contact of a given person.
* `get_contact_3` - Returns contact of a given provider.
* `get_correspondence_address_1` - Returns correspondence address of a given provider.
* `get_custom_fields_2` - Returns custom fields of a given person.
* `get_custom_fields_3` - Returns custom fields of a given provider.
* `send_invitations` - Sends invitation to Vendor Portal.
* `send_invitations_1` - Sends invitations to Vendor Portal.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
